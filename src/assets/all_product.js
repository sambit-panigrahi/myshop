import p1_img from '../assets/women1.jfif'
import p2_img from '../assets/men1.webp'
import p3_img from '../assets/women2.jpg'
import p4_img from '../assets/men2.jpg'
import p5_img from '../assets/men3.webp'
import p6_img from '../assets/women3.jpg'
import p7_img from '../assets/men4.jfif'
import p8_img from '../assets/women4.webp'
import p9_img from '../assets/men5.webp'
import p10_img from '../assets/women5.webp'
import p11_img from '../assets/men6.webp'
import p12_img from '../assets/women6.webp'
import p13_img from '../assets/men7.jfif'
import p14_img from '../assets/women7.webp'
import p15_img from '../assets/men8.jpg'
import p16_img from '../assets/women8.jfif'
 import p17_img from '../assets/w17.png'
 import p18_img from '../assets/w18.png'
 import p19_img from '../assets/w19.png'
 import p20_img from '../assets/w20.png'
import p21_img from '../assets/kid1.jpg'
import p22_img from '../assets/k1.jpg'
import p23_img from '../assets/kid2.jfif'
import p24_img from '../assets/k2.png'
import p25_img from '../assets/kid3.jfif'
import p26_img from '../assets/k3.jpg'
import p27_img from '../assets/kid4.webp'
import p28_img from '../assets/k4.jpg'
import p29_img from '../assets/kid5.jfif'
import p30_img from '../assets/m30.png'
import p31_img from '../assets/kid6.jfif'
import p32_img from '../assets/m32.png'
import p33_img from '../assets/kid7.webp'
import p34_img from '../assets/m34.png'
import p35_img from '../assets/kid8.jfif'
import p36_img from '../assets/m36.png'


let all_product = [
    { id: 1, name: "Kurti", category: "women", image: p1_img,  new_price: 50.0, old_price: 80.5},
    { id: 2, name: "Shirt", category: "men", image:p2_img, new_price: 60.0, old_price: 90.5 },
    { id: 3, name: "Saree", category: "women", image:p3_img, new_price: 75.0, old_price: 120.0 },
    { id: 4, name: "Formal", category: "men", image: p4_img, new_price: 90.0, old_price: 140.0 },
    { id: 5, name: "T-Shirt", category: "men", image: p5_img, new_price: 45.0, old_price: 70.0 },
    { id: 6, name: "Dress", category: "women", image: p6_img, new_price: 85.0, old_price: 130.0 },
    { id: 7, name: "Trouser", category: "men", image: p7_img, new_price: 95.0, old_price: 150.0 },
    { id: 8, name: "Leggings", category: "women", image: p8_img, new_price: 55.0, old_price: 100.0 },
    { id: 9, name: "Jacket", category: "men", image: p9_img, new_price: 70.0, old_price: 110.0 },
    { id: 10, name: "Jumpsuit", category: "women", image: p10_img, new_price: 88.0, old_price: 135.0 },
    { id: 11, name: "Coat", category: "men", image: p11_img, new_price: 92.0, old_price: 145.0 },
    { id: 12, name: "Gown", category: "women", image: p12_img, new_price: 99.0, old_price: 160.0 },
    { id: 13, name: "Hoodie", category: "men", image: p13_img, new_price: 40.0, old_price: 65.0 },
    { id: 14, name: "Top", category: "women", image: p14_img, new_price: 52.0, old_price: 85.0 },
    { id: 15, name: "T-shirt", category: "men", image: p15_img, new_price: 78.0, old_price: 115.0 },
    { id: 16, name: "Skirt", category: "women", image:p16_img, new_price: 180.0, old_price: 110.0 },
    { id: 17, name: "Lehenga", category: "women", image:p17_img, new_price: 73.0, old_price: 110.0 },
    { id: 18, name: "Swiming Suit", category: "women", image:p18_img, new_price: 69.0, old_price: 110.0 },
    { id: 19, name: "Sambalpuri", category: "women", image:p19_img, new_price: 103.0, old_price: 110.0 },
    { id: 20, name: "Long Kurti", category: "women", image:p20_img, new_price: 93.0, old_price: 110.0 },
    { id: 21, name: "Denim Shirt", category: "kid", image: p21_img, new_price: 85.0, old_price: 140.0 },
    { id: 22, name: "Denim Shirt", category: "kid", image: p22_img, new_price: 85.0, old_price: 140.0 },   
    { id: 23, name: "Cargo Pants", category: "kid", image:p23_img , new_price: 88.0, old_price: 130.0 },
    { id: 24, name: "Cargo Pants", category: "kid", image:p24_img , new_price: 88.0, old_price: 130.0 },    
    { id: 25, name: "Trousers", category: "kid", image:p25_img , new_price: 76.0, old_price: 120.0 },
    { id: 26, name: "Trousers", category: "kid", image:p26_img , new_price: 76.0, old_price: 120.0 },
    { id: 27, name: "Tank Top", category: "kid", image: p27_img, new_price: 49.0, old_price: 80.0 },
    { id: 28, name: "Tank Top", category: "kid", image: p28_img, new_price: 49.0, old_price: 80.0 },   
    { id: 29, name: "Formal Pants", category: "kid", image:p29_img, new_price: 98.0, old_price: 160.0 },
    { id: 30, name: "Formal Pant", category: "men", image:p30_img, new_price: 89.0, old_price: 160.0 },
    { id: 31, name: "Leather Jacket", category: "kid", image: p31_img, new_price: 150.0, old_price: 250.0 },
    { id: 32, name: "Cargo", category: "men", image:p32_img, new_price: 120.0, old_price: 160.0 },
    { id: 33, name: "Gym Shorts", category: "kid", image: p33_img, new_price: 55.0, old_price: 90.0 },
    { id: 34, name: "Shorts", category: "men", image:p34_img, new_price: 74.0, old_price: 160.0 },
    { id:35, name: "Casual Blazer", category: "kid", image: p35_img, new_price: 105.0, old_price: 170.0 },
    { id: 36, name: "Baggy", category: "men", image:p36_img, new_price: 99.0, old_price: 160.0 },
]

export default all_product;