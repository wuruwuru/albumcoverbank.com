export const Genre = [
  "Highlife",
  "Folk",
  "Funk",
  "Soul",
  "Reggae",
  "Afro Pop",
  "R&B",
  "Hip Hop",
  "Rap",
  "Soukous",
  "Gospel",
  "Afrobeat",
  "Classical",
  "Pop",
  "Jazz",
  "Fuji",
  "Juju",
  "Boogie",
  "Choral",
  "Blues",
  "Electronic",
  "Disco",
  "Apala",
  "Rock",
  "Waka",
  "Apola",
  "Soul",
  "Afro Soul",
  "Alternative",
  "Afrobeats",
  "Afro-Fusion",
  "Psychedelic",
  "latin",
  "Afro Cuban",
  "Alternative Folk",
  "Dance-pop",
  "Dancehall",
  "Christian",
  "Calypso",
  "Trap",
  "Neo Soul",
  "Reggaeton",
  "Country",
  "Choral",
  "Emo-",
  "Opera",
  "Pop Rock",
  "Azonto",
  "Soca",
  "Ogene",
  "Dance",
  "Pachanga",
  "Roots Reggae",
  "Sakara",
  "synth-pop",
  "Merengue",
  "Rumba",
  "Religious",
  "Afro-Dancehall",
].sort((a, b) => {
  let fa = a.toLowerCase(),
    fb = b.toLowerCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

export const ArtistList = [
  "Oyedele",
  "Asake",
  "Kold AF",
  "Joe Nez",
  "Raytheboffin",
  "Joeboy",
  "Blaqbonez",
  "Llona",
  "Psycho YP",
  "Dizzy K",
  "Toby Foyeh",
  "Davido",
  "Sute Iwar",
  "Rema",
  "Jesse Jagz",
  "DJ Jimmy Jatt",
  "Boj",
  "Simi",
  "Young Jonn",
  "Kizz Daniel",
  "Smada",
  "Shallipopi",
  "Tems",
  "Cruel Santino",
  "Dele Sosimi Meets Medlar",
  "Dami Dante",
  "Rema",
  "Wizkid",
  "K1 The Ultimate",
  "Olamide",
  "Praiz",
  "Brymo",
  "AYLØ",
  "Aura",
  "Fela Anikulapo Kuti & Afrika 70",
  "Desmond",
  "Various",
  "Lagbaja",
  "King Sunny Ade & His African Beats",
  "Bola Johnson",
  "Olamide",
  "Tomi Thomas",
  "Gboyega Adelaja",
].sort((a, b) => {
  let fa = a.toLowerCase(),
    fb = b.toLowerCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});

export const DesignerList = [
  "Osa Seven",
  "Svstw",
  "Lemi Ghariokwu",
  "Sinalo Ngcaba",
  "Niyi Okewowo",
  "Funto Coker",
  "Upson Martin",
  "Musai Ganiyy",
  "Duro Arts",
  "RO The Visualist",
  "Robert Stace",
  "Demola Ogunajo",
  "Bolade Banjo",
  "Kingurantatata",
].sort((a, b) => {
  let fa = a.toLowerCase(),
    fb = b.toLowerCase();
  if (fa < fb) {
    return -1;
  }
  if (fa > fb) {
    return 1;
  }
  return 0;
});
