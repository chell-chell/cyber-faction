// =============================================================================
// db.js - Cyber Faction Supabase
// =============================================================================
//
// STEP 1: Fill in your Supabase credentials below
// Project URL  -> Settings > API > Project URL
// Anon Key     -> Settings > API > Project API keys > anon public
//
const SUPABASE_URL  = 'https://glbckpewpveplqljidqo.supabase.co';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdsYmNrcGV3cHZlcGxxbGppZHFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc0NDU0ODcsImV4cCI6MjA5MzAyMTQ4N30.gdVaJQKn6-khk8o19A_w4Nde1_uRCPwLq6q9HM2d7Ig';
//
// =============================================================================

const { createClient } = supabase;
const _sb = createClient(SUPABASE_URL, SUPABASE_ANON);

const DB = (() => {

  const listeners = {
    rankings:   [],
    worldGauge: []
  };

  return {

    async savePlayer(playerData) {
      if (!playerData.id || !playerData.faction) return;
      const myHighScore = playerData.history && playerData.history.length > 0
        ? Math.max(...playerData.history.map(h => h.score)) : 0;

      const { error } = await _sb.from('players').upsert({
        id:                 playerData.id,
        name:               playerData.name              || 'UNKNOWN',
        faction:            playerData.faction,
        high_score:         Math.max(myHighScore, playerData.highScore || 0),
        total_contribution: playerData.totalContribution || 0,
        unlocked:           playerData.unlocked          || [],
        equipped_title:     playerData.equippedTitle     || null,
        last_active:        Date.now()
      }, { onConflict: 'id' });

      if (error) console.error('[DB] savePlayer error:', error.message);
    },

    async getRankings() {
      const { data, error } = await _sb
        .from('players')
        .select('id, name, faction, high_score, total_contribution')
        .gt('high_score', 0)
        .order('high_score', { ascending: false })
        .limit(50);

      if (error) { console.error('[DB] getRankings error:', error.message); return []; }

      return (data || []).map(p => ({
        id:                p.id,
        name:              p.name,
        faction:           p.faction,
        highScore:         p.high_score,
        totalContribution: p.total_contribution
      }));
    },

    async getWorldGauge() {
      const { data, error } = await _sb
        .from('world_gauge')
        .select('create_points, destroy_points')
        .eq('id', 1)
        .single();

      if (error) { console.error('[DB] getWorldGauge error:', error.message); return { create: 580000, destroy: 420000 }; }

      return {
        create:  data.create_points,
        destroy: data.destroy_points
      };
    },

    async contributeToFaction(faction, points) {
      const { error } = await _sb.rpc('add_faction_contribution', {
        p_faction: faction,
        p_points:  points
      });

      if (error) console.error('[DB] contributeToFaction error:', error.message);
    },

    async submitResult(playerId, score, faction, playerName) {
      const { data: current } = await _sb
        .from('players')
        .select('high_score')
        .eq('id', playerId)
        .single();

      const currentHigh = current?.high_score || 0;

      const { error } = await _sb.from('players').upsert({
        id:          playerId,
        name:        playerName,
        faction:     faction,
        high_score:  Math.max(score, currentHigh),
        last_active: Date.now()
      }, { onConflict: 'id' });

      if (error) console.error('[DB] submitResult error:', error.message);

      return await this.getRankings();
    },

    onRankingsChange(callback) {
      listeners.rankings.push(callback);
    },

    onWorldGaugeChange(callback) {
      listeners.worldGauge.push(callback);
    },

    init() {
      _sb.channel('players-changes')
        .on('postgres_changes',
          { event: '*', schema: 'public', table: 'players' },
          async () => {
            const rankings = await this.getRankings();
            listeners.rankings.forEach(cb => cb(rankings));
          }
        )
        .subscribe();

      _sb.channel('gauge-changes')
        .on('postgres_changes',
          { event: 'UPDATE', schema: 'public', table: 'world_gauge' },
          (payload) => {
            const gauge = {
              create:  payload.new.create_points,
              destroy: payload.new.destroy_points
            };
            listeners.worldGauge.forEach(cb => cb(gauge));
          }
        )
        .subscribe();

      console.log('[DB] Supabase connected');
    },

    startPolling() {
      // Not needed with Supabase realtime
    }

  };

})();

window.DB = DB;
