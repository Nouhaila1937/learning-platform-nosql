// Question : Comment gérer efficacement le cache avec Redis ?
// Réponse :
// Question: Quelles sont les bonnes pratiques pour les clés Redis ?
// Réponse :

// Fonctions utilitaires pour Redis
async function cacheData(key, data, ttl) {
    // TODO: Implémenter une fonction générique de cache
    // Pour le moment, nous allons juste stocker les données dans Redis
    const redisClient = await getRedisClient();
    await redisClient.set(key, JSON.stringify(data), 'EX', ttl);

  }
  async function getData(key) {
    const data=await redisClient.get(key);
    return data ?JSON.parse(data):null;
  }
  module.exports = {
    // TODO: Exporter les fonctions utilitaires
    cacheData,
    getData
  };