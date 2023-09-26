/// <reference lib="webworker" />

// Trong worker script (call-apis.worker.ts)
addEventListener('message', async ({ data }) => {
  console.log("Received from Main Thread ", data);

  if (data === 'start') {
    try {
      const [categoriesResponse, productsResponse] = await Promise.all([
        fetch('http://localhost:8080/api/categories'),
        fetch('http://localhost:8080/api/products')
      ]);

      if (categoriesResponse.ok && productsResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        const productsData = await productsResponse.json();

        postMessage({ type: 'categories', data: categoriesData });
        postMessage({ type: 'products', data: productsData });
      } else {
        // Xử lý trường hợp lỗi nếu cần
      }
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  }
});
