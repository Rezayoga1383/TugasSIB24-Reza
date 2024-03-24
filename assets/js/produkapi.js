document.addEventListener('DOMContentLoaded', async function () {
    try {
      const response = await fetch('https://crudcrud.com/api/a86082286ed64a4db3b6c6b7d8de1e12/produk');
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error('Gagal memuat data produk.');
      }
  
      const productContainer = document.querySelector('.product-list');
      productContainer.innerHTML = ''; // Clear existing content
  
      data.forEach(product => {
        const card = document.createElement('div');
        card.classList.add('product-card');
  
        const img = document.createElement('img');
        img.src = product.gambar_produk;
        img.alt = product.nama_produk;
  
        const title = document.createElement('h3');
        title.textContent = product.nama_produk;
  
        const price = document.createElement('div');
        price.textContent = 'Rp' + product.harga_produk;
  
        const button = document.createElement('button');
        button.textContent = 'Beli Sekarang';
  
        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(price);
        card.appendChild(button);
  
        productContainer.appendChild(card);
      });
    } catch (error) {
      console.error('Error:', error);
      alert('Terjadi kesalahan. Silakan coba lagi.');
    }
  });
  