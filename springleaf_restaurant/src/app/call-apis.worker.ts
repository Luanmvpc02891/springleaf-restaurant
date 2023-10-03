/// <reference lib="webworker" />

// Trong worker script (call-apis.worker.ts)
addEventListener('message', async ({ data }) => {
  console.log("Received from Main Thread ", data);
  const domain = 'http://localhost:8080/api';
  if (data === 'start') {
    try {
      const [categoriesResponse, productsResponse, cartDetailsResponse, combosResponse,
        eventsResponse, tablesResponse, restaurantsResponse, supplierResponse, tableStatusesResponse,
        ingredientsResponse, rolesResponse, roleFunctionsResponse, usersResponse, billsResponse,
        billDetailsResponse, cartsResponse, comboDetailsResponse, deliveriesResponse] = await Promise.all([
          fetch(`${domain}/categories`),
          fetch(`${domain}/products`),
          fetch(`${domain}/cartDetails`),
          fetch(`${domain}/combos`),
          fetch(`${domain}/events`),
          fetch(`${domain}/restaurantTables`),
          fetch(`${domain}/restaurants`),
          fetch(`${domain}/suppliers`),
          fetch(`${domain}/tableStatuses`),
          fetch(`${domain}/ingredients`),
          fetch(`${domain}/roles`),
          fetch(`${domain}/roleFunctions`),
          fetch(`${domain}/users`),
          fetch(`${domain}/bills`),
          fetch(`${domain}/billDetails`),
          fetch(`${domain}/carts`),
          fetch(`${domain}/comboDetails`),
          fetch(`${domain}/deliveries`),
        ]);

      if (categoriesResponse.ok && productsResponse.ok && cartDetailsResponse && combosResponse
        && eventsResponse.ok && tablesResponse.ok && restaurantsResponse.ok && supplierResponse.ok
        && tableStatusesResponse.ok && ingredientsResponse.ok && rolesResponse.ok && roleFunctionsResponse.ok
        && usersResponse.ok && billsResponse.ok && billDetailsResponse.ok, cartsResponse.ok && comboDetailsResponse.ok
        && deliveriesResponse.ok) {

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
        const deliveriesData = await deliveriesResponse.json();

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
        postMessage({ type: 'deliveries', data: deliveriesData });
      } else {
        // Xử lý trường hợp lỗi nếu cần
      }
    } catch (error) {
      // Xử lý lỗi nếu có
    }
  }
});
