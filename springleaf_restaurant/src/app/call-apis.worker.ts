/// <reference lib="webworker" />

// Trong worker script (call-apis.worker.ts)
addEventListener('message', async ({ data }) => {
  console.log("Received from Main Thread ", data);

  if (data === 'start') {
    try {
      const [categoriesResponse, productsResponse, cartDetailsResponse, combosResponse,
        evensResponse, tablesResponse, restaurantResponse, supplierResponse, tableStatusResponse,
        ingredientResponse, roleResponse, roleFunctionResponse, usersResponse] = await Promise.all([
          fetch('http://localhost:8080/api/categories'),
          fetch('http://localhost:8080/api/products'),
          fetch('http://localhost:8080/api/cartDetails'),
          fetch('http://localhost:8080/api/combos'),
          fetch('http://localhost:8080/api/events'),
          fetch('http://localhost:8080/api/restaurantTable'),
          fetch('http://localhost:8080/api/restaurants'),
          fetch('http://localhost:8080/api/suppliers'),
          fetch('http://localhost:8080/api/tableStatuss'),
          fetch('http://localhost:8080/api/ingredient'),
          fetch('http://localhost:8080/api/roles'),
          fetch('http://localhost:8080/api/roleFunctions'),
          fetch('http://localhost:8080/api/users'),


        ]);

      if (categoriesResponse.ok && productsResponse.ok && cartDetailsResponse && combosResponse
        && evensResponse.ok && tablesResponse.ok && restaurantResponse.ok && supplierResponse.ok
        && tableStatusResponse.ok && ingredientResponse.ok && roleResponse.ok && roleFunctionResponse.ok
        && usersResponse.ok) {
        const categoriesData = await categoriesResponse.json();
        const productsData = await productsResponse.json();
        const cartDetailsData = await cartDetailsResponse.json();
        const combosData = await combosResponse.json();
        const evensData = await evensResponse.json();
        const tablesData = await tablesResponse.json();
        const restaurantData = await restaurantResponse.json();
        const supplierData = await supplierResponse.json();
        const tableStatusData = await tableStatusResponse.json();
        const ingredientsData = await ingredientResponse.json();
        const rolesData = await roleResponse.json();
        const roleFunctionsData = await roleFunctionResponse.json();
        const usersData = await usersResponse.json();

        postMessage({ type: 'categories', data: categoriesData });
        postMessage({ type: 'products', data: productsData });
        postMessage({ type: 'cartDetails', data: cartDetailsData });
        postMessage({ type: 'combos', data: combosData });
        postMessage({ type: 'events', data: evensData });
        postMessage({ type: 'tables', data: tablesData });
        postMessage({ type: 'restaurants', data: restaurantData });
        postMessage({ type: 'suppliers', data: supplierData });
        postMessage({ type: 'tableStatuss', data: tableStatusData });
        postMessage({ type: 'ingredient', data: ingredientsData });
        postMessage({ type: 'roles', data: rolesData });
        postMessage({ type: 'roleFunctions', data: roleFunctionsData });
        postMessage({ type: 'users', data: usersData });
      } else {
        // Xử lý trường hợp lỗi nếu cần
      }
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  }
});
