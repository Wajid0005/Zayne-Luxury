// ZAYNÉ Product Catalog - Complete Database
// 10 Categories × 5 Products = 50 Total

const productDatabase = {
    lipsticks: {
        id: 'lipsticks',
        name: 'Lipsticks & Lip Care',
        icon: '💄',
        description: 'Luxurious lip colors and treatments',
        products: [
            { id: 101, name: 'Matte Silk Lipstick', shade: 'Gravity Rose', price: 42, image: 'assets/images/lipstick.png', category: 'lipsticks', featured: true },
            { id: 102, name: 'Velvet Matte Lipstick', shade: 'Parisian Nude', price: 42, image: 'assets/images/lipstick.png', category: 'lipsticks' },
            { id: 103, name: 'Satin Cream Lipstick', shade: 'Rouge Élégance', price: 44, image: 'assets/images/lipstick.png', category: 'lipsticks' },
            { id: 104, name: 'Glossy Lip Tint', shade: 'Cherry Blush', price: 38, image: 'assets/images/gloss.png', category: 'lipsticks' },
            { id: 105, name: 'Lip Treatment Oil', shade: 'Clear Shine', price: 36, image: 'assets/images/gloss.png', category: 'lipsticks' }
        ]
    },

    eyemakeup: {
        id: 'eyemakeup',
        name: 'Eye Makeup',
        icon: '👁️',
        description: 'Define and enhance your eyes',
        products: [
            { id: 201, name: 'Precision Liner', shade: 'Onyx Dimension', price: 36, image: 'assets/images/eyeliner.png', category: 'eyemakeup', featured: true },
            { id: 202, name: 'Kohl Intense', shade: 'Midnight Void', price: 35, image: 'assets/images/kajal.png', category: 'eyemakeup' },
            { id: 203, name: 'Volumizing Mascara', shade: 'Black Silk', price: 39, image: 'assets/images/kajal.png', category: 'eyemakeup' },
            { id: 204, name: 'Eyeshadow Palette', shade: 'Nude Essentials', price: 58, image: 'assets/images/eyeliner.png', category: 'eyemakeup' },
            { id: 205, name: 'Gel Liner Pot', shade: 'Espresso Brown', price: 32, image: 'assets/images/eyeliner.png', category: 'eyemakeup' }
        ]
    },

    facemakeup: {
        id: 'facemakeup',
        name: 'Face Makeup',
        icon: '✨',
        description: 'Flawless complexion perfection',
        products: [
            { id: 301, name: 'Weightless Foundation', shade: 'Porcelain 01', price: 52, image: 'assets/products/foundation.png', category: 'facemakeup', featured: true },
            { id: 302, name: 'Liquid Blush', shade: 'Rose Petal', price: 38, image: 'assets/products/foundation.png', category: 'facemakeup' },
            { id: 303, name: 'Radiant Highlighter', shade: 'Champagne Glow', price: 44, image: 'assets/products/foundation.png', category: 'facemakeup' },
            { id: 304, name: 'Setting Powder', shade: 'Translucent', price: 46, image: 'assets/products/foundation.png', category: 'facemakeup' },
            { id: 305, name: 'Bronzing Powder', shade: 'Sun-Kissed', price: 42, image: 'assets/products/foundation.png', category: 'facemakeup' }
        ]
    },

    koreanskincare: {
        id: 'koreanskincare',
        name: 'Korean Skincare',
        icon: '🌸',
        description: 'K-beauty innovation meets French luxury',
        products: [
            { id: 401, name: 'Glass Skin Serum', shade: 'Clear', price: 68, image: 'assets/products/vit-c.png', category: 'koreanskincare', featured: true },
            { id: 402, name: 'Snail Mucin Essence', shade: 'Clear', price: 48, image: 'assets/products/vit-c.png', category: 'koreanskincare' },
            { id: 403, name: 'Hydrating Sheet Mask', shade: 'Pearl Extract', price: 12, image: 'assets/images/gloss.png', category: 'koreanskincare' },
            { id: 404, name: 'Sleeping Mask', shade: 'Lavender Dream', price: 42, image: 'assets/products/foundation.png', category: 'koreanskincare' },
            { id: 405, name: 'Glow Toner Pad', shade: 'Clear', price: 32, image: 'assets/products/vit-c.png', category: 'koreanskincare' }
        ]
    },

    sunscreen: {
        id: 'sunscreen',
        name: 'Sunscreen & Protection',
        icon: '☀️',
        description: 'Advanced UV protection',
        products: [
            { id: 501, name: 'Invisible Sun Fluid SPF50+', shade: 'Clear', price: 38, image: 'assets/products/sun-fluid.png', category: 'sunscreen' },
            { id: 502, name: 'Tinted Sunscreen SPF45', shade: 'Light Beige', price: 42, image: 'assets/products/tinted-sun.png', category: 'sunscreen' },
            { id: 503, name: 'Body Sunscreen Mist SPF30', shade: 'Clear', price: 28, image: 'assets/products/body-sun.png', category: 'sunscreen' },
            { id: 504, name: 'Lip Balm SPF30', shade: 'Rose Tint', price: 18, image: 'assets/products/lip-spf.png', category: 'sunscreen' },
            { id: 505, name: 'Mineral Sunscreen SPF50', shade: 'Zinc White', price: 44, image: 'assets/products/mineral-sun.png', category: 'sunscreen' }
        ]
    },

    moisturizers: {
        id: 'moisturizers',
        name: 'Moisturizers & Creams',
        icon: '💧',
        description: 'Hydration and nourishment',
        products: [
            { id: 601, name: 'Cloud Cream Moisturizer', shade: 'Clear', price: 58, image: 'assets/products/cloud-cream.png', category: 'moisturizers' },
            { id: 602, name: 'Night Recovery Cream', shade: 'Clear', price: 72, image: 'assets/products/night-cream.png', category: 'moisturizers' },
            { id: 603, name: 'Eye Renewal Cream', shade: 'Clear', price: 54, image: 'assets/products/eye-cream.png', category: 'moisturizers' },
            { id: 604, name: 'Gel Moisturizer', shade: 'Clear', price: 48, image: 'assets/products/gel-moist.png', category: 'moisturizers' },
            { id: 605, name: 'Rich Face Balm', shade: 'Clear', price: 64, image: 'assets/products/face-balm.png', category: 'moisturizers' }
        ]
    },

    cleansers: {
        id: 'cleansers',
        name: 'Cleansers & Toners',
        icon: '🧴',
        description: 'Pure, gentle cleansing',
        products: [
            { id: 701, name: 'Micellar Water', shade: 'Clear', price: 32, image: 'assets/products/micellar.png', category: 'cleansers' },
            { id: 702, name: 'Foaming Cleanser', shade: 'White Cloud', price: 36, image: 'assets/products/foam-clean.png', category: 'cleansers' },
            { id: 703, name: 'Oil Cleanser', shade: 'Golden Oil', price: 42, image: 'assets/products/oil-clean.png', category: 'cleansers' },
            { id: 704, name: 'Rose Toner Mist', shade: 'Clear Pink', price: 38, image: 'assets/products/rose-toner.png', category: 'cleansers' },
            { id: 705, name: 'Exfoliating Toner', shade: 'Clear', price: 44, image: 'assets/products/exfo-toner.png', category: 'cleansers' }
        ]
    },

    serums: {
        id: 'serums',
        name: 'Serums & Treatments',
        icon: '💎',
        description: 'Targeted skin solutions',
        products: [
            { id: 801, name: 'Vitamin C Serum', shade: 'Clear Gold', price: 68, image: 'assets/products/vit-c.png', category: 'serums' },
            { id: 802, name: 'Retinol Night Serum', shade: 'Clear', price: 78, image: 'assets/products/retinol.png', category: 'serums' },
            { id: 803, name: 'Niacinamide Serum', shade: 'Clear', price: 52, image: 'assets/products/niacinamide.png', category: 'serums' },
            { id: 804, name: 'Hyaluronic Acid Serum', shade: 'Clear', price: 58, image: 'assets/products/hyaluronic.png', category: 'serums' },
            { id: 805, name: 'Peptide Complex Serum', shade: 'Clear', price: 84, image: 'assets/products/peptide.png', category: 'serums' }
        ]
    },

    tools: {
        id: 'tools',
        name: 'Tools & Brushes',
        icon: '🖌️',
        description: 'Professional application tools',
        products: [
            { id: 901, name: 'Foundation Brush', shade: 'Rose Gold Handle', price: 45, image: 'assets/products/found-brush.png', category: 'tools' },
            { id: 902, name: 'Blending Sponge Set', shade: 'Pink Velvet', price: 28, image: 'assets/products/sponge.png', category: 'tools' },
            { id: 903, name: 'Eye Brush Set', shade: 'Silver Collection', price: 68, image: 'assets/products/eye-brush.png', category: 'tools' },
            { id: 904, name: 'Lip Brush', shade: 'Gold Precision', price: 24, image: 'assets/products/lip-brush.png', category: 'tools' },
            { id: 905, name: 'Facial Roller', shade: 'Rose Quartz', price: 38, image: 'assets/products/roller.png', category: 'tools' }
        ]
    },

    fragrance: {
        id: 'fragrance',
        name: 'Fragrance & Body',
        icon: '🌹',
        description: 'Signature scents and body luxury',
        products: [
            { id: 1001, name: 'Eau de Parfum', shade: 'ZAYNÉ Noir', price: 125, image: 'assets/products/perfume-noir.png', category: 'fragrance' },
            { id: 1002, name: 'Body Lotion', shade: 'Rose & Vanilla', price: 42, image: 'assets/products/body-lotion.png', category: 'fragrance' },
            { id: 1003, name: 'Shimmer Body Oil', shade: 'Gold Dust', price: 48, image: 'assets/products/body-oil.png', category: 'fragrance' },
            { id: 1004, name: 'Hair Mist', shade: 'Floral Dream', price: 38, image: 'assets/products/hair-mist.png', category: 'fragrance' },
            { id: 1005, name: 'Hand Cream', shade: 'Silk Touch', price: 22, image: 'assets/products/hand-cream.png', category: 'fragrance' }
        ]
    }
};

// Helper functions
const getAllProducts = () => {
    return Object.values(productDatabase).flatMap(cat => cat.products);
};

const getProductById = (id) => {
    return getAllProducts().find(p => p.id === id);
};

const getProductsByCategory = (categoryId) => {
    return productDatabase[categoryId]?.products || [];
};

const getCategoryInfo = (categoryId) => {
    return productDatabase[categoryId] || null;
};

// Export for use in main script
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productDatabase, getAllProducts, getProductById, getProductsByCategory, getCategoryInfo };
}
