export default {
  async fetch(request, env, ctx) {
    return new Response("Halo! Bot Worker Anda berhasil aktif dan berjalan dengan lancar.", {
      headers: { "content-type": "text/plain" },
    });
  },
};
