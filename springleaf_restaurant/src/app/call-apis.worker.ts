/// <reference lib="webworker" />

// Trong worker script (call-apis.worker.ts)
addEventListener('message', async ({ data }) => {
  console.log("Received from Main Thread ", data);

  if (data === 'start') {
    try {
      const [categoriesResponse, productsResponse, cartDetailsResponse, combosResponse,
        eventsResponse, tablesResponse, restaurantsResponse, supplierResponse, tableStatusesResponse,
        ingredientsResponse, rolesResponse, roleFunctionsResponse, usersResponse, billsResponse,
        billDetailsResponse, cartsResponse ,comboDetailsResponse , deliverysResponse] = await Promise.all([
          fetch('http://localhost:8080/api/categories'),
          fetch('http://localhost:8080/api/products'),
          fetch('http://localhost:8080/api/cartDetails'),
          fetch('http://localhost:8080/api/combos'),
          fetch('http://localhost:8080/api/events'),
          fetch('http://localhost:8080/api/restaurantTables'),
          fetch('http://localhost:8080/api/restaurants'),
          fetch('http://localhost:8080/api/suppliers'),
          fetch('http://localhost:8080/api/tableStatuses'),
          fetch('http://localhost:8080/api/ingredients'),
          fetch('http://localhost:8080/api/roles'),
          fetch('http://localhost:8080/api/roleFunctions'),
          fetch('http://localhost:8080/api/users'),
          fetch('http://localhost:8080/api/bills'),
          fetch('http://localhost:8080/api/billDetails'),
          fetch('http://localhost:8080/api/carts'),
          fetch('http://localhost:8080/api/comboDetails'),
          fetch('http://localhost:8080/api/deliverys'),



        ]);

      if (categoriesResponse.ok && productsResponse.ok && cartDetailsResponse && combosResponse
        && eventsResponse.ok && tablesResponse.ok && restaurantsResponse.ok && supplierResponse.ok
        && tableStatusesResponse.ok && ingredientsResponse.ok && rolesResponse.ok && roleFunctionsResponse.ok
        && usersResponse.ok && billsResponse.ok && billDetailsResponse.ok, cartsResponse.ok && comboDetailsResponse.ok
        &&deliverysResponse.ok) {

        const categoriesData = await categoriesResponse.json();
        const productsData = await productsResponse.json();
        const cartDetailsData = await cartDetailsResponse.json();
        const combosData = await combosResponse.json();
        const eventsData = await eventsResponse.json();
        const tablesData = await tablesResponse.json();
        const restaurantsData = await restaurantsResponse.json();
        const suppliersData = await supplierResponse.json();
        const tableStatusesData = await tableStatusesResponse.json();
        const ingredientsData = await ingredientsResponse.json();
        const rolesData = await rolesResponse.json();
        const roleFunctionsData = await roleFunctionsResponse.json();
        const usersData = await usersResponse.json();
        const billsData = await billsResponse.json();
        const billDetailsData = await billDetailsResponse.json();
        const cartsData = await cartsResponse.json();
        const comboDetailsData = await comboDetailsResponse.json();
        const deliverysData = await deliverysResponse.json();

        postMessage({ type: 'categories', data: categoriesData });
        postMessage({ type: 'products', data: productsData });
        postMessage({ type: 'cartDetails', data: cartDetailsData });
        postMessage({ type: 'combos', data: combosData });
        postMessage({ type: 'events', data: eventsData });
        postMessage({ type: 'tables', data: tablesData });
        postMessage({ type: 'restaurants', data: restaurantsData });
        postMessage({ type: 'suppliers', data: suppliersData });
        postMessage({ type: 'tableStatuses', data: tableStatusesData });
        postMessage({ type: 'ingredients', data: ingredientsData });
        postMessage({ type: 'roles', data: rolesData });
        postMessage({ type: 'roleFunctions', data: roleFunctionsData });
        postMessage({ type: 'users', data: usersData });
        postMessage({ type: 'bills', data: billsData });
        postMessage({ type: 'billDetails', data: billDetailsData });
        postMessage({ type: 'carts', data: cartsData });
        postMessage({ type: 'comboDetails', data: comboDetailsData });
        postMessage({ type: 'deliverys', data: deliverysData });
      } else {
        // Xử lý trường hợp lỗi nếu cần
      }
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  }
});
