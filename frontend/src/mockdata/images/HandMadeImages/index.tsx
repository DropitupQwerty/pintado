import SampleImage from 'mockdata/images/HandMadeImages/sampleImages/sampleImage.jpg'
import woodenFrame from 'mockdata/images/HandMadeImages/sampleImages/sampleWoodenFrame.png'
import metalFrame from 'mockdata/images/HandMadeImages/sampleImages/sampleMetalFrame.png'
import Monalisa from 'mockdata/images/HandMadeImages/sampleImages/monalisa.jpg'
import TheScream from 'mockdata/images/HandMadeImages/sampleImages/theScream.jpg'
import StarryNight from 'mockdata/images/HandMadeImages/sampleImages/starryNight.jpg'
import ThePersistenceofMemory from 'mockdata/images/HandMadeImages/sampleImages/ThePersistenceofMemory.jpg'
import StarryNightOvertheRhône from 'mockdata/images/HandMadeImages/sampleImages/Starry_Night_Over_the_Rhone.jpg'

export const paintings = [
    {
        id: 1,
        title: 'Starry Night',
        description: 'A masterpiece of Post-Impressionist art, painted by Vincent van Gogh in 1889.',
        author: 'Vincent van Gogh',
        imageUrl: StarryNight,
        ratings: [
            { userId: 1, rating: 5, feedback: 'Beautiful artwork!' },
            { userId: 2, rating: 4, feedback: 'Love the colors.' },
            { userId: 3, rating: 4, feedback: 'Impressive.' },
        ],
        price: 2500, // Sample price in dollars
        canvasSize: '24" x 36"', // Sample canvas size
        category: 'Post-Impressionism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 2,
        title: 'Mona Lisa',
        description: 'The iconic portrait of Lisa Gherardini, painted by Leonardo da Vinci between 1503 and 1506.',
        author: 'Leonardo da Vinci',
        imageUrl: Monalisa,
        ratings: [
            { userId: 4, rating: 5, feedback: 'A true masterpiece!' },
            { userId: 10, rating: 1, feedback: 'Tang inang item to!! Bulok!' },
            { userId: 5, rating: 4, feedback: 'Intriguing smile.' },
            { userId: 6, rating: 5, feedback: 'Absolutely stunning.' },
        ],
        price: 3500, // Sample price in dollars
        canvasSize: '30" x 40"', // Sample canvas size
        category: 'Renaissance', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 3,
        title: 'The Persistence of Memory',
        description: 'Salvador Dali\'s surreal masterpiece created in 1931, featuring melting clocks.',
        author: 'Salvador Dali',
        imageUrl: ThePersistenceofMemory,
        ratings: [
            { userId: 7, rating: 5, feedback: 'Mind-bending.' },
            { userId: 8, rating: 4, feedback: 'Unique and captivating.' },
            { userId: 9, rating: 3, feedback: 'Interesting concept.' },
        ],
        price: 2800, // Sample price in dollars
        canvasSize: '22" x 28"', // Sample canvas size
        category: 'Surrealism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Abstract',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Surreal',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 4,
        title: 'Starry Night Over the Rhône',
        description: 'Another stunning night sky painting by Vincent van Gogh, completed in 1888.',
        author: 'Vincent van Gogh',
        imageUrl: StarryNightOvertheRhône,
        ratings: [
            { userId: 10, rating: 4, feedback: 'Gorgeous night scene.' },
            { userId: 11, rating: 3, feedback: 'Good use of colors.' },
            { userId: 12, rating: 5, feedback: 'Mesmerizing.' },
        ],
        price: 2700, // Sample price in dollars
        canvasSize: '24" x 36"', // Sample canvas size
        category: 'Post-Impressionism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 5,
        title: 'The Scream',
        description: 'A famous expressionist painting by Edvard Munch, created in 1893.',
        author: 'Edvard Munch',
        imageUrl: TheScream,
        ratings: [
            { userId: 13, rating: 4, feedback: 'Emotional artwork.' },
            { userId: 14, rating: 5, feedback: 'Captures anxiety perfectly.' },
            { userId: 15, rating: 4, feedback: 'Iconic.' },
        ],
        price: 2900, // Sample price in dollars
        canvasSize: '18" x 24"', // Sample canvas size
        category: 'Expressionism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Expressionist',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Abstract',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 6,
        title: 'The Birth of Venus',
        description: 'Sandro Botticelli\'s Renaissance masterpiece depicting the birth of the goddess Venus.',
        author: 'Sandro Botticelli',
        imageUrl: SampleImage,
        ratings: [
            { userId: 16, rating: 5, feedback: 'Classic beauty.' },
            { userId: 17, rating: 4, feedback: 'Elegant composition.' },
            { userId: 18, rating: 5, feedback: 'Timeless artwork.' },
        ],
        price: 3200, // Sample price in dollars
        canvasSize: '26" x 40"', // Sample canvas size
        category: 'Renaissance', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 7,
        title: 'Guernica',
        description: 'Pablo Picasso\'s powerful anti-war mural, created in response to the Spanish Civil War.',
        author: 'Pablo Picasso',
        imageUrl: SampleImage,
        ratings: [
            { userId: 19, rating: 5, feedback: 'Political statement.' },
            { userId: 20, rating: 4, feedback: 'Emotional impact.' },
            { userId: 21, rating: 3, feedback: 'Symbolic.' },
        ],
        price: 3800, // Sample price in dollars
        canvasSize: '36" x 48"', // Sample canvas size
        category: 'Cubism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Cubist',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Abstract',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 8,
        title: 'The Girl with a Pearl Earring',
        description: 'Johannes Vermeer\'s enigmatic portrait of a young girl wearing a pearl earring.',
        author: 'Johannes Vermeer',
        imageUrl: SampleImage,
        ratings: [
            { userId: 22, rating: 5, feedback: 'Subtle beauty.' },
            { userId: 23, rating: 4, feedback: 'Mysterious smile.' },
            { userId: 24, rating: 5, feedback: 'Intricate details.' },
        ],
        price: 3100, // Sample price in dollars
        canvasSize: '24" x 30"', // Sample canvas size
        category: 'Baroque', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Baroque',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Classic',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 9,
        title: 'The Last Supper',
        description: 'Leonardo da Vinci\'s famous depiction of Jesus and his disciples during the Last Supper.',
        author: 'Leonardo da Vinci',
        imageUrl: SampleImage,
        ratings: [
            { userId: 25, rating: 5, feedback: 'Spiritual masterpiece.' },
            { userId: 26, rating: 4, feedback: 'Iconic portrayal.' },
            { userId: 27, rating: 5, feedback: 'Historically significant.' },
        ],
        price: 3600, // Sample price in dollars
        canvasSize: '28" x 42"', // Sample canvas size
        category: 'Renaissance', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 10,
        title: 'American Gothic',
        description: 'Grant Wood\'s iconic painting featuring a farmer and his daughter in front of a Gothic-style house.',
        author: 'Grant Wood',
        imageUrl: SampleImage,
        ratings: [
            { userId: 28, rating: 4, feedback: 'Rural charm.' },
            { userId: 29, rating: 3, feedback: 'Symbolic portrayal.' },
            { userId: 30, rating: 4, feedback: 'Quintessentially American.' },
        ],
        price: 2900, // Sample price in dollars
        canvasSize: '20" x 30"', // Sample canvas size
        category: 'Regionalism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 11,
        title: 'The Starry Night',
        description: 'A vibrant and swirling night sky painted by Vincent van Gogh in 1889.',
        author: 'Vincent van Gogh',
        imageUrl: SampleImage,
        ratings: [
            { userId: 31, rating: 5, feedback: 'Mesmerizing colors.' },
            { userId: 32, rating: 4, feedback: 'Captures the imagination.' },
            { userId: 33, rating: 5, feedback: 'Impressionistic brilliance.' },
        ],
        price: 2700, // Sample price in dollars
        canvasSize: '24" x 36"', // Sample canvas size
        category: 'Post-Impressionism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 12,
        title: 'The Girl with the Pearl Necklace',
        description: 'A mysterious portrait featuring a young girl with a pearl necklace by Johannes Vermeer.',
        author: 'Johannes Vermeer',
        imageUrl: SampleImage,
        ratings: [
            { userId: 34, rating: 5, feedback: 'Enigmatic beauty.' },
            { userId: 35, rating: 4, feedback: 'Intriguing expression.' },
            { userId: 36, rating: 5, feedback: 'Elegant composition.' },
        ],
        price: 3200, // Sample price in dollars
        canvasSize: '26" x 32"', // Sample canvas size
        category: 'Baroque', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Baroque',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Classic',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 13,
        title: 'The Birth of Adam',
        description: 'Michelangelo\'s famous depiction of the creation of Adam from the Sistine Chapel ceiling.',
        author: 'Michelangelo',
        imageUrl: SampleImage,
        ratings: [
            { userId: 37, rating: 5, feedback: 'Divine inspiration.' },
            { userId: 38, rating: 4, feedback: 'Incredible detail.' },
            { userId: 39, rating: 5, feedback: 'Spiritual masterpiece.' },
        ],
        price: 3800, // Sample price in dollars
        canvasSize: '30" x 40"', // Sample canvas size
        category: 'Renaissance', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 14,
        title: 'Water Lilies',
        description: 'Claude Monet\'s series of water lily paintings capturing the beauty of his garden pond.',
        author: 'Claude Monet',
        imageUrl: SampleImage,
        ratings: [
            { userId: 40, rating: 5, feedback: 'Peaceful and serene.' },
            { userId: 41, rating: 4, feedback: 'Impressionistic brilliance.' },
            { userId: 42, rating: 5, feedback: 'Nature in art.' },
        ],
        price: 2900, // Sample price in dollars
        canvasSize: '24" x 48"', // Sample canvas size
        category: 'Impressionism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Classic',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Modern',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    {
        id: 15,
        title: 'The Persistence of Dreams',
        description: 'A surreal and dreamlike painting by Rene Magritte, known for his thought-provoking art.',
        author: 'Rene Magritte',
        imageUrl: SampleImage,
        ratings: [
            { userId: 43, rating: 4, feedback: 'Surreal brilliance.' },
            { userId: 44, rating: 3, feedback: 'Thought-provoking.' },
            { userId: 45, rating: 4, feedback: 'Imaginative.' },
        ],
        price: 3100, // Sample price in dollars
        canvasSize: '28" x 36"', // Sample canvas size
        category: 'Surrealism', // New category field
        frameDesigns: [
            {
                frameMaterial: 'Wood',
                frameType: 'Abstract',
                frameImage: woodenFrame, // Updated with wooden frame image
            },
            {
                frameMaterial: 'Metal',
                frameType: 'Surreal',
                frameImage: metalFrame, // Updated with metal frame image
            },
        ],
    },
    
    
    
]

export default paintings