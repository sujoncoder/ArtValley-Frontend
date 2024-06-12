const artsData = [
  {
    id: "1",
    name: "Starry Night",
    artist: "Vincent van Gogh",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Starry_Night_Over_the_Rhone.jpg/1280px-Starry_Night_Over_the_Rhone.jpg",
    description:
      "Starry Night is one of the most recognized pieces of art in the world. It is absolutely everywhere, too. It can be seen on coffee mugs, t-shirts, towels, magnets, etc. It is a magnificent piece of art.",
    price: 150,
    country: "Netherlands",
    year: 1889,
    medium: "Oil on canvas",
    location: "Museum of Modern Art, New York City",
    stock: 5,
  },
  {
    id: "2",
    name: "The Persistence of Memory",
    artist: "Salvador Dalí",
    photo: "https://www.phaidon.com/resource/persistenceofmemory1931.jpg",
    description:
      "The Persistence of Memory is a painting by artist Salvador Dalí, and one of the most recognizable works of Surrealism. First shown in 1931, the painting epitomizes Dalí's theory of 'softness' and 'hardness', which was central to his thinking at the time.",
    price: 120,
    country: "Spain",
    year: 1931,
    medium: "Oil on canvas",
    location: "Museum of Modern Art, New York City",
    stock: 10,
  },
  {
    id: "3",
    name: "The Scream",
    artist: "Edvard Munch",
    photo:
      "https://fatcatart.com/wp-content/uploads/2016/08/Munch-The_Scream-1893-cat-min.jpg",
    description:
      "The Scream is the popular name given to a composition created by Norwegian Expressionist artist Edvard Munch in 1893. The agonized face in the painting has become one of the most iconic images of art, seen as symbolizing the anxiety of the human condition.",
    price: 200,
    country: "Norway",
    year: 1893,
    medium: "Oil, tempera, and pastel on cardboard",
    location: "National Gallery, Oslo",
    stock: 7,
  },
  {
    id: "4",
    name: "Guernica",
    artist: "Pablo Picasso",
    photo:
      "https://m.media-amazon.com/images/I/71ubXq88AAS._AC_UF1000,1000_QL80_.jpg",
    description:
      "Guernica is a mural-sized oil painting on canvas by Spanish artist Pablo Picasso completed in June 1937. The painting, one of Picasso's best-known works, is regarded by many art critics as the most moving and powerful anti-war painting in history.",
    price: 250,
    country: "Spain",
    year: 1937,
    medium: "Oil on canvas",
    location: "Museo Reina Sofía, Madrid",
    stock: 3,
  },
  {
    id: "5",
    name: "The Night Watch",
    artist: "Rembrandt van Rijn",
    photo: "https://ychef.files.bbci.co.uk/1280x720/p070wbmx.jpg",
    description:
      "The Night Watch is one of the most famous paintings by Dutch artist Rembrandt van Rijn. It depicts a company of civil militia members moving out, led by Captain Frans Banning Cocq and his lieutenant, Willem van Ruytenburch.",
    price: 180,
    country: "Netherlands",
    year: 1642,
    medium: "Oil on canvas",
    location: "Rijksmuseum, Amsterdam",
    stock: 8,
  },
  {
    id: "6",
    name: "The Kiss",
    artist: "Gustav Klimt",
    photo:
      "https://m.media-amazon.com/images/I/61+eBnS5g6L._AC_UF894,1000_QL80_.jpg",
    description:
      "The Kiss is an oil painting, with added silver and gold leaf, by the Austrian Symbolist painter Gustav Klimt. It was painted at some point in 1907 and 1908, during the height of what scholars call his 'Golden Period'.",
    price: 140,
    country: "Austria",
    year: 1907,
    medium: "Oil and gold leaf on canvas",
    location: "Österreichische Galerie Belvedere, Vienna",
    stock: 6,
  },
  {
    id: "7",
    name: "Girl with a Pearl Earring",
    artist: "Johannes Vermeer",
    photo:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/800px-1665_Girl_with_a_Pearl_Earring.jpg",
    description:
      "Girl with a Pearl Earring is an oil painting by Dutch Golden Age painter Johannes Vermeer. It is a tronie of a girl wearing a headscarf and a pearl earring. The painting has been in the collection of the Mauritshuis in The Hague since 1902.",
    price: 175,
    country: "Netherlands",
    year: 1665,
    medium: "Oil on canvas",
    location: "Mauritshuis, The Hague",
    stock: 9,
  },
  {
    id: "8",
    name: "The Birth of Venus",
    artist: "Sandro Botticelli",
    photo:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/birth-of-venus-marvin-bradley.jpg",
    description:
      "The Birth of Venus is a painting by the Italian artist Sandro Botticelli, probably made in the mid-1480s. It depicts the goddess Venus arriving at the shore after her birth, when she had emerged from the sea fully-grown.",
    price: 300,
    country: "Italy",
    year: 1485,
    medium: "Tempera on canvas",
    location: "Uffizi Gallery, Florence",
    stock: 4,
  },
  {
    id: "9",
    name: "American Gothic",
    artist: "Grant Wood",
    photo:
      "https://images.fineartamerica.com/images/artworkimages/mediumlarge/2/american-gothic-by-grant-wood-infrared-version-grant-wood.jpg",
    description:
      "American Gothic is a painting by Grant Wood in the collection of the Art Institute of Chicago. Wood was inspired to paint what is now known as the American Gothic House along with 'the kind of people I fancied should live in that house'.",
    price: 90,
    country: "United States",
    year: 1930,
    medium: "Oil on beaverboard",
    location: "Art Institute of Chicago",
    stock: 12,
  },
  {
    id: "10",
    name: "The Garden of Earthly Delights",
    artist: "Hieronymus Bosch",
    photo:
      "https://media.mutualart.com/Images//2020_06/30/22/224847023/4aa27190-c69e-4d1d-95c1-604f13a8d8b4.Jpeg",
    description:
      "The Garden of Earthly Delights is the modern title given to a triptych painted by the Early Netherlandish master Hieronymus Bosch. It dates from between 1490 and 1510, when Bosch was between 40 and 60 years old. It has been housed in the Museo del Prado in Madrid since 1939.",
    price: 250,
    country: "Netherlands",
    year: 1505,
    medium: "Oil on oak panel",
    location: "Museo del Prado, Madrid",
    stock: 2,
  },
];
export default artsData;
