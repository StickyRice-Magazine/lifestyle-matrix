const lifeStyleArticles = [
  {
    link: "Wisdom-Of-Youth",
    image:
      "https://freight.cargo.site/t/original/i/12f7df61a16400c868459d3af7777c9f77f8c290e6e3d3906beacd824ffb6dd3/Linda-Lindas-Thumbnail.png",
    type: "Arts & Culture",
    name: "Wisdom Of Youth",
    description:
      "The show must go on with the Linda Lindas. Meet the next generation of rockstars and bubble tea lovers.",
  },
  {
    link: "Le-peigne",
    image:
      "https://freight.cargo.site/t/original/i/616166f127d1d120e3f3aa11c29fc1a09cdef64daf9f7e6691bd279b685bc9ab/Le-Peigne-Landing-Thumbnail.jpg",
    type: "Arts & Culture",
    name: "Le Peigne",
    description:
      "Artist Wawa Li walks us through the process behind the 300-pound Chinatown recycled plastic sculpture, The Comb (“le peigne”)",
  },
  {
    link: "The-Great-Canadian-Baking-Show",
    image:
      "https://freight.cargo.site/t/original/i/33b4095a6dde2d67ac2f13452505ed2e5c4865af4cfd2d58a49bc30ed3a90e4e/Vertical-Thumbnail.png",
    type: "Arts & Culture",
    name: "The Joy (And Nostalgia) of Baking",
    description:
      "The Asian-Canadian bakers of season six of The Great Canadian Baking Show tells us about the delicious treats that defined their childhoods. ",
  },
  {
    link: "In-Conversation-Johnny-Kim-on-Fatherhood-Fashion-and-Cambodian",
    image:
      "https://freight.cargo.site/t/original/i/5054e45c8327f3f6c3fa19d76223b3a3ecfe690c1ac7d206b6c775bc9eab3ab3/Thumbnail_Resized-741x930.jpg",
    type: "Arts & Culture",
    name: "In Conversation: Johnny Kim on Fatherhood, Fashion, and Cambodian Identity",
    description:
      "In conversation: Multifaceted creative Johnny F. Kim talks fatherhood, creativity and Cambodian identity",
  },
  {
    link: "La-verite-derriere-deux-noms",
    image:
      "https://freight.cargo.site/t/original/i/011c82f5fa0651d39cd7b23e60820ce41becbae2fb73e274b5032bcf1bf8e0de/Thumbnail-741-x-930.jpg",
    type: "Essay",
    name: "La vérité derrière deux noms",
    description: "My-Van Dam chooses to affirm her name. [FR]",
  },
  {
    link: "A-Recipe-Toward-World-Peace",
    image:
      "https://freight.cargo.site/t/original/i/e6d5b95dcc1b42d6ba7c287555361074a65eedb55665f6db13a51672f641a80e/Thumbnail-Crop-731-x-940.jpg",
    type: "People",
    name: "A Recipe Toward World Peace",
    description:
      "An interview with team Courage ahead of the 2021 Montreal municipal election.",
  },
  {
    link: "Pride-In-Chinatown",
    image:
      "https://freight.cargo.site/t/original/i/8833b6aa1568d2f303334fe0725da097bb7fa7a3bdc6d399a810acb652a50e23/Thumbnail-Crop-741-x-930.jpg",
    type: "Arts & Culture",
    name: "Pride In Chinatown",
    description:
      "Sticky Rice Magazine celebrates its first anniversary by exploring the meaning of pride.",
  },
  {
    link: "Aberrance-Tradition-Redefining-Beauty-from-the-Past",
    image:
      "https://freight.cargo.site/t/original/i/ea5051add04dc18e29edf88c913a24d8d242513c6e7866a840ed361be12cdcdb/ThumbnailRicky.jpg",
    type: "Arts & Culture",
    name: "Aberrance & Tradition: Redefining Beauty from the Past",
    description: "Fantasy and surrealism as a means of self-expression.",
  },
  {
    link: "Archival-Photo-Account-Montreal-Then-And-Now-on-a-Chinatown-Capsule",
    image:
      "https://freight.cargo.site/t/original/i/c5246ee050e679fcb4e52cd53837c8c7548d941866de1083c7f0501a631dfecc/Crop-Chinatown-730-x-941.jpg",
    type: "Arts & Culture",
    name: "Archival Photo Account Montreal: Then And Now on a Chinatown Capsule",
    description:
      "A collaboration between Elijah Herron and Wawa Li,about visual impact and current realities.",
  },
  {
    link: "Creating-Conversations",
    image:
      "https://freight.cargo.site/t/original/i/babfdb5dca158a5e62f685ee9d862ebb0524620847f21dc93d6554f7bed2089a/StHenri5.jpg",
    type: "Arts & Culture",
    name: "Creating Conversations: Reading Recommendations from Weird Era x Librairie St-Henri Books",
    description:
      "A curated list of recommended reading by Asian authors and authors of colour from the founder of Weird Era, in partnership with Montreal’s Librairie St-Henri Books.",
  },
  {
    link: "Chinatown-Tea-Leaves",
    image:
      "https://freight.cargo.site/t/original/i/00da44f38a391e0071dd1846317dfe7be76ad4cec66b89d1dea9f460f963ef84/WEBSITE-THUMBNAIL.jpg",
    type: "Arts & Culture",
    name: "Chinatown Tea Leaves",
    description:
      "Chinatown Tea Leaves is a short documentary about tea master Howard Low and his tea shop in Montréal, Spécialithé.",
  },
  {
    link: "Carving-the-Self-Out-of-Metal-and-Stone",
    image:
      "https://freight.cargo.site/t/original/i/e3c506c967caa1598e50191d585f38e0586bdb67f0a5c569b68d9b08d3050b19/Thumbnail-941-x-930-Carving-The-Self.jpg",
    type: "Arts & Culture",
    name: "Carving the Self Out of Metal and Stone",
    description:
      "A conversation with Caroline Pham of ORA-C and Lina Hu of YUUN on their jewelry brands and running small businesses in Montreal.",
  },
  {
    link: "Nose-Kisses-on-the-Screen",
    image:
      "https://freight.cargo.site/t/original/i/be28bb11396f568d4cca3b085885d84c30cef2218e99c267e4caf8f1435790e8/thumbnail-nose-kisses.JPG",
    type: "Essay",
    name: "Nose Kisses on the Screen",
    description:
      "Linh Nguyễn finds alternative ways of connecting while longing for reunion amidst a worldwide lockdown.",
  },
  {
    link: "UNOTHERED-Closer",
    image:
      "https://freight.cargo.site/t/original/i/243e8fe39f7766d0ef3b04c35e137108321ddade6b4492f11700110033239514/Thumbnail-731x940.jpg",
    type: "Essay",
    name: "UNOTHERED: Closer",
    description:
      "Visual artist Feng峰 presents a solution process to otherness through a series of intimate portraits.",
  },
  {
    link: "Le-Festival-Acces-Asie-Vu-a-travers-Khosro-Berahmandi",
    image:
      "https://freight.cargo.site/t/original/i/d05f9d34f30a721f70a07a6372d46ffc3639fe046e81fb87f03d4b828f79a591/Khosro-741x930-Thumbnail.jpg",
    type: "Arts & Culture",
    name: "Le Festival Accès Asie Vu à travers Khosro Berahmandi",
    description:
      "Lecturer and art curator Amandine Davre discusses Festival Accès Asie’s latest online edition with festival artistic director Khosro Berahmandi.",
  },
  {
    link: "SPAM",
    image:
      "https://freight.cargo.site/t/original/i/5aa2e45292fe9c2e9f33912d5078faad63211f6f28da02327d9e5d3b15e7af69/kitchen-a_741x930.jpg",
    type: "Essay, Food",
    name: "SPAM",
    description:
      "Part memoir. Part cultural examination. In this award-nominated piece, Nikki Celis explores his fascination of the eponymous canned food and its influence on the Filipino identity. ",
  },
  {
    link: "Charting-the-Future-of-ChinaTOwn",
    image:
      "https://freight.cargo.site/t/original/i/849c0beadbeeb9257d9fba6d9211206241f878e48204d5e8f02add812ceb45ac/Hero-Image---Lifestyle-Page-4.png",
    type: "Spotlight",
    name: "Charting the Future of ChinaTOwn",
    description:
      "A conversation with Toronto-based artist, architect, and educator Linda Zhang.",
  },
  {
    link: "The-Food-That-Binds-Us-Together-A-Visual-Exploration",
    image:
      "https://freight.cargo.site/t/original/i/7751af227cc2491ae3d6d1895bc93103b9ceef2a99964292ec901f4e0d837361/image-2.png",
    type: "Arts & Culture",
    name: "The Food That Binds Us Together: A Visual Exploration",
    description:
      "Visual artist Gloria Wong explores the relationship between food and intimacy/affection in Hong Kong diasporic communities.",
  },
  {
    link: "Love-Grit-Rock-N-Roll-Keeping-the-Dream-Alive-with-Susil-Sharma",
    image:
      "https://freight.cargo.site/t/original/i/4abf0134b5b3b48cb96fa27ed2ba5b9421af2b5247cbf229397f1e5fc3477807/image-1.png",
    type: "Arts & Culture",
    name: "Love, Grit & Rock 'N’ Roll: Keeping the Dream Alive with Susil Sharma",
    description:
      "The Nepalese singer-songwriter discusses his new album, BIPOC visibility in the music scene, and everything in between.",
  },
  {
    link: "The-Centre-Cannot-Hold",
    image:
      "https://freight.cargo.site/t/original/i/5777acb2c3997a45f7de192e8cb890f3ddda38eecb4176d802af347849cd0376/aahm-4-1.png",
    type: "Spotlight",
    name: "The Centre Cannot Hold",
    description:
      "Dispatches from the Sticky Rice editorial team from Montreal’s March Against Anti-Asian Racism.",
  },
  {
    link: "Becoming-Recollections-of-Home-Part-II",
    image:
      "https://freight.cargo.site/t/original/i/f037e03dc11901198465aefd21d12e3653307d2ebd93ef782c27f8ee814357ef/Becoming-Part-II.png",
    type: "Essay",
    name: "Becoming: Recollections of Home (Part II)",
    description:
      "Becoming: Jiā [家] (Part II) further reflects on fluctuating notions of home. Through a series of conversations and observations taken in Beijing, Becoming questions how notions of home shift and adapt over time.",
  },
  {
    link: "Becoming-Recollections-of-Home-Part-I",
    image:
      "https://freight.cargo.site/t/original/i/a9c60afacf36a68a806f33c761df59e5a53ec3a8349919c9c87fb9d9065eb741/Thumbnail_Resized-min-min.jpg",
    type: "Essay",
    name: "Becoming: Recollections of Home (Part I)",
    description:
      "At a time when our lives exist extensively in the virtual realm, Becoming takes an autoethnographic look at our ever-shifting notions of home.",
  },
  {
    link: "Anders-Kapur-Redefining-the-Americana-Image",
    image:
      "https://freight.cargo.site/t/original/i/397917f2c90ae8112bb7eb8f716656ddd9bd8bac5b34f37b6e4865ce0110a082/thumbnail_anders-min.jpg",
    type: "Music",
    name: "Anders Kapur: Redefining the Americana Image",
    description:
      "New York-based singer-songwriter Anders Kapur flips the mythology of the white songwriter persona through his music.",
  },
  {
    link: "Weaving-Timelines-The-Seeds-Sow-Deeper-Than-We-Know",
    image:
      "https://freight.cargo.site/t/original/i/90c4091c13064f059f3bf4d85e437e847215dd8dd72c9e26ce616e42510c6569/Thumbnail-hero-min.png",
    type: "Essay",
    name: "Weaving Timelines: The Seeds Sow Deeper Than We Know",
    description:
      "Visual artist Marshall Hoang threads together past and present in this stunning photo series.",
  },
  {
    link: "The-Sixth-Love-Language",
    image:
      "https://freight.cargo.site/t/original/i/194c93624c054c3e8159621ae16670acd062be9e6f76f25095d39afceec230b6/thumbnail2.jpg",
    type: "Food",
    name: "The Sixth Love Language",
    description:
      "Writer Linh S. Nguyễn on how she learned to love in the language of food.",
  },
  {
    link: "The-Tokyo-Aesthetic-Dispatches-from-the-Streets-of-Fashion-Week",
    image:
      "https://freight.cargo.site/t/original/i/1bc340c6cac4e3520e2b65e1a5ebef1cfb2831803ba0188689ef398ea174b00a/For-Sticky-7.jpg",
    type: "Style",
    name: "The Tokyo Aesthetic: Dispatches from the Streets of Fashion Week",
    description: `Photographer Jean-Guillaume Bastin reminisces on his years spent chronicling Tokyo's celebrated October Fashion Week.`,
  },
  {
    link: "Drawing-Strength-from-Within-Perspectives-from-Mixed-Martial-Arts",
    image:
      "https://freight.cargo.site/t/original/i/099402d6f230b46dc26804b637818be0d9a03944007e1a7e0f6dfb8762cbe196/Stickyrice_MMA_homepage.jpg",
    type: "People",
    name: "Drawing Strength from Within: Perspectives from Mixed Martial Arts Fighters",
    description: `Celebrated coach and trainer Christian Hip reflects on the art of MMA, and sits down with some of the best fighters (and coaches) in the field.`,
  },
  {
    link: "The-Sun-Sets-at-Six-A-Conversation-with-Antares-Yee",
    image:
      "https://freight.cargo.site/t/original/i/1987ced17fdfc81db52b0023b81c2ae04589bffade63ae3aeef41d74a0d445f5/antares_07-min.jpg",
    type: "People",
    name: "The Sun Sets at Six: A Conversation with Antares Yee",
    description: `Using the sun mao (榫卯) technique to design his furniture, the creative director or Sun at Six discusses what it's like to create functional works of art in the era of Trump.`,
  },
  {
    link: "Une-invitation-aux-asiatiques-a-prendre-la-vie-doucement",
    image:
      "https://freight.cargo.site/t/original/i/d33d7ca23c5baf46eef56a0764e248563f0044cb54f4707c2aeece34f38db925/Laura-Color-3.JPG",
    type: "People",
    name: "Une invitation aux asiatiques a prendre la vie doucement",
    description: `Une conversation avec Laura Nhem qui a lancé le podcast Asiate Imparfaite, des entrevues avec des asiatiques qui sont, tout comme Laura, imparfaits.`,
  },
  {
    link: "To-Harness-Your-Inner-Light-Up-Close-with-LIA",
    image:
      "https://freight.cargo.site/t/original/i/51febf1738a1048927c7166bd5c93b5d6c3bcd79f538b3693814165821bdc1a2/1.jpg",
    type: "Music",
    name: "To Harness Your Inner Light - Up Close with LIA",
    description: `In her latest EP Vasilia, LIA’s sultry voice hums over bell sounds and shuffling noises as she tells a story of resilience inspired by a Slavic fairytale.`,
  },
  {
    link: "Art-Versus-Injustice-Catching-Up-With-Albert-Nguyen",
    image:
      "https://freight.cargo.site/t/original/i/fd49ed92ae342fb055b74f8318cbc8b1990db3b1e7c9bff4e2caf9cd09b13c9d/Thumbnail-picture-1.jpg",
    type: "Opinion",
    name: "Art versus Injustice: an Interview with Albert Nguyen",
    description: `Art director and graphic design Albert Nguyen on his contribution to the Sticky Rice pagoda fundraiser, the creative process, and everything in between.`,
  },
  {
    link: "The-Wisdom-of-Style-A-Mix-of-Colours-Prints-and-Eras",
    image:
      "https://freight.cargo.site/t/original/i/2557c1b920d067cb757d01a0c6d7b673ecf4c413e8f42acf28d758e6c3190c21/Image-2-min.jpg",
    type: "People",
    name: "The Wisdom of Style: A Mix of Colours, Prints and Eras",
    description: `Everyone who's been to a major city's Chinatown knows about the amazing food. But, if you are truly paying attention, this neighbourhood is home to some the most creative fashion choices spearheaded by local seniors.`,
  },
  {
    link: "Cheryl-Sim-Curating-a-Life-Through-Art",
    image:
      "https://freight.cargo.site/w/450/i/8200ecbd510d8ef20c72ad80403885ed552841a1b28ea298f37403a8f7007d4c/thumbnail.jpg",
    type: "Culture & Art",
    name: "Cheryl Sim: Curating a Life Through Art",
    description: `A conversation with Cheryl Sim; the accessible, informed, and dynamic face of the Montreal’s Phi Foundation
for Contemporary Art`,
  },
  {
    link: "Back-to-school-A-teacher-s-thoughts-and-worries",
    image:
      "https://freight.cargo.site/t/original/i/ebea07c9b8e04a6fc411b265a9352c72aad2788aa9a62c2bfc9d1d08db1aa5f4/SR_BackToSchool4-1.png",
    type: "Opinion",
    name: "Back-to-School: A Teacher's Thoughts and Worries",
    description: `There have been mixed-feelings about this year’s back-to-school season. Sticky Rice’s Lifestyle editor and educator, Kevin Ah-Sen, shares his concern on the matter and those of concerned teachers and parents.`,
  },
  {
    link: "For-The-Love-Of-Pho",
    image:
      "https://freight.cargo.site/t/original/i/aeceba3eea3d0953cad1f160437291351b983b85f49c8a896001db2db6de7b03/ezgif.com-optimize-4.gif",
    type: "Opinion",
    name: "For the Love of Pho",
    description: `Inspired by the local mobilization from the Vietnamese community last week, we sat down with Julie Tran to discuss last week’s controversy over the Pho King Bon restaurant’s problematic marketing strategy that involved the use of Quebecer slang words and sexually explicit puns to name the various Vietnamese dishes on its menu.`,
  },
  {
    link: "For-the-Love-of-Food-Bridging-the-Gap-Between-Two-Worlds",
    image:
      "https://freight.cargo.site/t/original/i/2e7489ce0ecedd83eaa5827cdfd89b6f58d7082b44a54528845eddd833cba710/Yatai_AffichesRGB_20200805a_OC-02.jpg",
    type: "Food",
    name: "For the Love of Food: Bridging the Gap Between Two Worlds",
    description: `A conversation with Cheryl Sim; the accessible, informed, and dynamic face of the Montreal’s Phi Foundation
for Contemporary Art`,
  },
  {
    link: "Radical-Compassion-In-The-Face-Of-Violence",
    image:
      "https://freight.cargo.site/t/original/i/3ecbef7a6d878cefc6a94cfb6977af76cf5d404a22e6a05ff85aa91c9b2b2b5b/CQA_LAM0985-min-1_TMB.jpg",
    type: "Culture & Art",
    name: "Radical Compassion in the Face of Violence",
    description: `To bookend our crowdfunding campaign to replace vandalized statues at the Chùa Quan Âm Buddhist pagoda, members of the Sticky Rice team sat down with two of its monks to discuss what it means to be truly compassionate.`,
  },
  {
    link: "Catching-Up-With-Friends-Family-1-0",
    image:
      "https://freight.cargo.site/t/original/i/cec42400d7657c74bd696a4365edf722bacf685031be2dd881f2b79e3a686e22/1080x1350_00057.jpg",
    type: "People",
    name: "Catching Up With Friends & Family 1.0",
    description: `You may recognize them from our first issue’s cover. We caught up with our friends to find out what being Asian-Canadian meant for them.`,
  },
  {
    link: "The-Asiancy",
    image:
      "https://freight.cargo.site/t/original/i/33e73765bc203cad27ca3d5d2a092955be457ec095e0ed2f1a9503252548cb9b/LS-A1-crop.jpg",
    type: "People",
    name: "The Asiancy",
    description: `A little over a year ago, a small group of Asian creatives decided to create a Facebook group that would make
    it easier for them to connect over food.`,
  },
  {
    link: "Lunar-Traditions",
    image:
      "https://freight.cargo.site/t/original/i/4e7be84ccd06fe7b1e716f6dc3262966cf7262fc6c62266b7b3cb16814fd439f/RedPocket_01_00000.jpg",
    type: "Culture & Art",
    name: "Lunar Traditions",
    description: `Lunar New Year, according to the Chinese calendar, begins on the second full moon after the Winter Solstice
    and is considered one of the most important and longest holidays.`,
  },
];

let html = "";

for (let i = 0; i < lifeStyleArticles.length; i++) {
  const article = lifeStyleArticles[i];

  // If article is the first of the row, add the grid
  // open grid 0, 3, 6
  if (i % 3 === 0) {
    html += `<div grid-row="" grid-pad="2" grid-gutter="4" grid-responsive="">`;
  }

  html += `
  <div grid-col="x10" grid-pad="2">
  <a href="${article.link}" rel="history" class="a-gen"
    ><img
      src="${article.image}"
      style="width: 100%"
      border="0"
      alt="Thumbnail image for ${article.name}"
    /><br />
    <div class="lifestyle-description--padding">
      <b>${article.type}</b><br />${article.name}
    </div>
    <br /><span
      class="lifestyle-description--padding lifestyle-description--font"
      >${article.description}</span
    ></a
  >
</div>`;

  // close the div if it's the last article in row
  // close grid 2, 5, 8,

  if ((i + 1) % 3 === 0 || i + 1 === lifeStyleArticles.length) {
    html += `</div><br/>`;
  }
}

console.log(html);
