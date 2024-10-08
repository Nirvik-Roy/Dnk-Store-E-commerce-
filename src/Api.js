import React from "react";

const API_DATA=[
    {id:'1',
        title:"DNK Black Shoes",
        image:'https://i.postimg.cc/1twGh5Ds/sports-shoe3-300x300.jpg',
        images:['https://i.postimg.cc/MTsBqppq/sports-shoe3.jpg','https://i.postimg.cc/QCJsZyBR/sports-shoe2.jpg','https://i.postimg.cc/hj4fYT34/sports-shoe4-600x600.jpg','https://i.postimg.cc/NMN5vFW6/sports-shoe5-600x600.jpg'],
        category:'Men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[]
    },
    {id:'2',
        title:"DNK Blue Shoes",
        image:'https://i.postimg.cc/j2LCxKbG/sports-shoe1-600x600.jpg',
        images:['https://i.postimg.cc/j2LCxKbG/sports-shoe1-600x600.jpg','https://i.postimg.cc/QCJsZyBR/sports-shoe2.jpg','https://i.postimg.cc/hj4fYT34/sports-shoe4-600x600.jpg','https://i.postimg.cc/NMN5vFW6/sports-shoe5-600x600.jpg'],
        category:'Men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:["#4db1c1","#85da4f","#d25628"]
    },
    {id:'3',
        title:"Dark Brown Jeans",
        image:'https://i.postimg.cc/X78gYJmv/product-m-jeans1-300x300.jpg',
        images:['https://i.postimg.cc/4NvJ9Fph/product-m-jeans1.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[]
    },
    {id:'4',
        title:"Denim Jeans",
        image:'https://i.postimg.cc/sgH95LVd/product-w-jeans2-300x300.jpg',
        images:['https://i.postimg.cc/DycTZ4Kr/product-w-jeans2.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[]
    },
    {id:'5',
        title:"Basic Gray Jeans",
        image:'https://i.postimg.cc/MGc05YTc/product-w-jeans4-300x300.jpg',
        images:['https://i.postimg.cc/LsJKNygD/product-w-jeans4.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[]
    },
    {id:'6',
        title:"Blue Denim Shorts",
        image:'https://i.postimg.cc/YCCzG7Bz/product-w-jeans1-300x300.jpg',
        images:['https://i.postimg.cc/x8D2kKCR/product-w-jeans1.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[]
    },
    {id:'7',
        title:"Anchor Bracelet",
        image:'https://i.postimg.cc/wxDVnFkL/product-accessory2-300x300.jpg',
        images:['https://i.postimg.cc/kg1PNrGD/product-accessory2.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:["#4db1c1","#85da4f","#d25628"],
        accessories:true
    },
    {id:'8',
        title:"Bangle Bracelet",
        image:'https://i.postimg.cc/1X1KfNy8/product-accessory1-300x300.jpg',
        images:['https://i.postimg.cc/xCbQTs08/product-accessory1.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:["#4db1c1","#85da4f","#d25628"],
        accessories:true,
    },
    {id:'9',
        title:"Brown Purse",
        image:'https://i.postimg.cc/rFcJTWhb/product-bag1-300x300.jpg',
        images:['https://i.postimg.cc/d0VtvmkZ/product-bag1.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:[],
        accessories:true,
    },
    {id:'10',
        title:"Red Bag",
        image:'https://i.postimg.cc/XqKkF7vQ/product-bag3-300x300.jpg',
        images:['https://i.postimg.cc/dV4wWkHs/product-bag3.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        special:true,
        color:["#4db1c1","#85da4f","#d25628"],
        accessories:true,
    },
    {id:'11',
        title:"Black Hoodie",
        image:'https://i.postimg.cc/2yHqzc5Q/product-hoodie1-300x300.jpg',
        images:['https://i.postimg.cc/jjBV9zzb/product-hoodie1.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'350', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'12',
        title:"Black HandBag",
        image:'https://i.postimg.cc/MKTMsSsd/product-bag2-300x300.jpg',
        images:['https://i.postimg.cc/SQC4BtTt/product-bag2.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'750', 
        color:[],
        accessories:true,
    },
    {id:'13',
        title:"Blue Hoodie",
        image:'https://i.postimg.cc/wMxyY89x/product-hoodie2-300x300.jpg',
        images:['https://i.postimg.cc/CL00SH9M/product-hoodie2.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'750', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'14',
        title:"Blue Tshirt",
        image:'https://i.postimg.cc/bJ9D5NcF/tshirt2-300x300.jpg',
        images:['https://i.postimg.cc/vTrd5cxd/tshirt2.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'250', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'15',
        title:"Gold Purse",
        image:'https://i.postimg.cc/wvpRFRPm/product-bag4-300x300.jpg',
        images:['https://i.postimg.cc/CK2Y0yp9/product-bag4.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'250', 
        color:[],
        accessories:true,
    },
    {id:'17',
        title:"Gold Bracelet",
        image:'https://i.postimg.cc/CK5Y9hXj/product-accessory3.jpg',
        images:['https://i.postimg.cc/CK5Y9hXj/product-accessory3.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'250', 
        color:[],
        accessories:true,
    },
    {id:'18',
        title:" Denim Jeans",
        image:'https://i.postimg.cc/G2BLTLjc/product-m-jeans3.jpg',
        images:['https://i.postimg.cc/G2BLTLjc/product-m-jeans3.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'650', 
        color:[]
    },
    {id:'19',
        title:"Pink Tshirt",
        image:'https://i.postimg.cc/DyjsFZW9/tshirt3-300x300.jpg',
        images:['https://i.postimg.cc/3rvrKwR1/tshirt3.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'350', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'20',
        title:"Yellow Tshirt",
        image:'https://i.postimg.cc/sx73KT8q/tshirt7.jpg',
        images:['https://i.postimg.cc/sx73KT8q/tshirt7.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'350', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'21',
        title:"Green Hoodie",
        image:'https://i.postimg.cc/y6TcQn7Y/product-hoodie3-300x300.jpg',
        images:['https://i.postimg.cc/Jn91bfTj/product-hoodie3.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'650', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'22',
        title:"Purple Tshirt",
        image:'https://i.postimg.cc/cHRwNBYh/tshirt1-300x300-1.jpg',
        images:['https://i.postimg.cc/kgcXkh4d/tshirt1.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'350', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'23',
        title:"Maaron Hoodie",
        image:'https://i.postimg.cc/6qzZ86MG/product-hoodie4-jpg-300x300.jpg',
        images:['https://i.postimg.cc/SK1QK2CT/product-hoodie4-jpg.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'650', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'24',
        title:"Slim Fit Jeans",
        image:'https://i.postimg.cc/C5wDMnsg/product-w-jeans3-300x300.jpg',
        images:['https://i.postimg.cc/zXTfkfYv/product-w-jeans3.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'650', 
        color:[]
    },
    {id:'25',
        title:"Basic Grey Jeans",
        image:'https://i.postimg.cc/nV7jg2ZQ/product-m-jeans4-300x300.jpg',
        images:['https://i.postimg.cc/zXYz31Hr/product-m-jeans4.jpg'],
        category:'men',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'650', 
        color:[]
    },
    {id:'26',
        title:"Dnk-Pink Shoes",
        image:'https://i.postimg.cc/qq8NKJQG/sports-shoe2-300x300.jpg',
        images:['https://i.postimg.cc/QCJsZyBR/sports-shoe2.jpg','https://i.postimg.cc/hj4fYT34/sports-shoe4-600x600.jpg','https://i.postimg.cc/NMN5vFW6/sports-shoe5-600x600.jpg','https://i.postimg.cc/MTsBqppq/sports-shoe3.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'27',
        title:"Dnk-Green Shoes",
        image:'https://i.postimg.cc/5NSHNtX4/sports-shoe4-300x300.jpg',
        images:['https://i.postimg.cc/hj4fYT34/sports-shoe4-600x600.jpg','https://i.postimg.cc/QCJsZyBR/sports-shoe2.jpg','https://i.postimg.cc/hj4fYT34/sports-shoe4-600x600.jpg','https://i.postimg.cc/NMN5vFW6/sports-shoe5-600x600.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'28',
        title:"Gold Bracelet",
        image:'https://i.postimg.cc/wxCvJmPn/product-accessory2-b-2.jpg',
        images:['https://i.postimg.cc/wxCvJmPn/product-accessory2-b-2.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        color:["#4db1c1","#85da4f","#d25628"],
        accessories:true,
    },
    {id:'29',
        title:"Bronze Bracelet",
        image:'https://i.postimg.cc/8kJcjHyh/product-accessory2-c-1.jpg',
        images:['https://i.postimg.cc/8kJcjHyh/product-accessory2-c-1.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'450', 
        color:["#4db1c1","#85da4f","#d25628"],
        accessories:true,
    },
    {id:'30',
        title:"Mud Tshirt",
        image:'https://i.postimg.cc/zXXW9Wfw/tshirt7-300x300.jpg',
        images:['https://i.postimg.cc/sx73KT8q/tshirt7.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'350', 
        color:["#4db1c1","#85da4f","#d25628"],
    },
    {id:'31',
        title:"Dark HandBag",
        image:'https://i.postimg.cc/MKTMsSsd/product-bag2-300x300.jpg',
        images:['https://i.postimg.cc/SQC4BtTt/product-bag2.jpg'],
        category:'women',
        description: 'Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris in erat justo. Nullam ac urna eu felis dapibus condimentum sit amet a augue. Sed non neque elit sed.',
        price:'750', 
        color:[],
    },
]
export default API_DATA