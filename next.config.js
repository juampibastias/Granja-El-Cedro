const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  env: {
    BASE_URL: isProduction ? 'https://granja-el-cedro.vercel.app/' : 'http://localhost:3000',
    MONGODB_URL: 'mongodb+srv://granja-el-cedro:h8ULKfXgXCQKSkvW@cluster0.o2bdesq.mongodb.net/?retryWrites=true&w=majority',
    ACCESS_TOKEN_SECRET: "Z>`u%zX`c.LLRhA?Ks>^+]DRB<2LwK%Q';5b)(VT3D*t&aEw",
    REFRESH_TOKEN_SECRET: "K)R!9z8a?rp'QN(^;4B[qybEJ4xxL)LjApyqk_&bYTHwhz9_*E,QyZ/(<tFW=Cj6_Y4J.bSk</E",
    PAYPAL_CLIENT_ID: "YOUR_PAYPAL_CLIENT_ID",
    CLOUD_UPDATE_PRESET: "almacen_on_line",
    CLOUD_NAME: "almacen-on-line",
    CLOUD_API: "https://api.cloudinary.com/v1_1/almacen-on-line/image/upload"
  }
};
