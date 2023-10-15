/// <reference lib="webworker" />


// Trong worker script (call-apis.worker.ts)
addEventListener('message', async ({ data }) => {
        console.log("Received from Main Thread ", data);
        const domain = 'http://localhost:8080/api';
        if (data === 'start') {
                try {
                        const [categoriesResponse, productsResponse, cartDetailsResponse, combosResponse,
                                eventsResponse, tablesResponse, restaurantsResponse, supplierResponse, tableStatusesResponse,
                                ingredientsResponse, rolesResponse, roleFunctionsResponse,
                                billsResponse,
                                billDetailsResponse, cartsResponse, comboDetailsResponse, deliveriesResponse,
                                deliveryDetailsResponse, deliveryOrdersResponse, deliveryOrderStatussResponse, deliveryOrderDetailsResponse, favoritesResponse,
                                inventoriesResponse, inventoryBranchsResponse, menuItemIngredientsResponse, orderThresholdsResponse,
                                mergeTablesResponse, orderTypesResponse, paymentsResponse, ratingResponse, receiptsResponse,
                                receiptDetailsResponse, reservationsResponse, restaurantTablesResponse] = await Promise.all([
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
                                        fetch(`${domain}/bills`),
                                        fetch(`${domain}/billDetails`),
                                        fetch(`${domain}/carts`),
                                        fetch(`${domain}/comboDetails`),
                                        fetch(`${domain}/deliveries`),
                                        fetch(`${domain}/deliveryDetails`),
                                        fetch(`${domain}/deliveryOrders`),
                                        fetch(`${domain}/deliveryOrderStatuss`),
                                        fetch(`${domain}/deliveryOrderDetails`),
                                        fetch(`${domain}/favorites`),
                                        fetch(`${domain}/inventories`),
                                        fetch(`${domain}/inventoryBranches`),
                                        fetch(`${domain}/menuItemIngredients`),
                                        fetch(`${domain}/orderThresholds`),
                                        fetch(`${domain}/mergeTables`),
                                        fetch(`${domain}/orderTypes`),
                                        fetch(`${domain}/payments`),
                                        fetch(`${domain}/ratings`),
                                        fetch(`${domain}/receipts`),
                                        fetch(`${domain}/receiptDetails`),
                                        fetch(`${domain}/reservations`),
                                        fetch(`${domain}/restaurantTables`),

                                ]);

                        if (categoriesResponse.ok && productsResponse.ok && cartDetailsResponse && combosResponse
                                && eventsResponse.ok && tablesResponse.ok && restaurantsResponse.ok && supplierResponse.ok
                                && tableStatusesResponse.ok && ingredientsResponse.ok && rolesResponse.ok && roleFunctionsResponse.ok
                                && billsResponse.ok && billDetailsResponse.ok, cartsResponse.ok && comboDetailsResponse.ok
                                && deliveriesResponse.ok && deliveryDetailsResponse.ok && deliveryOrdersResponse.ok && deliveryOrderStatussResponse.ok
                                && deliveryOrderDetailsResponse.ok && favoritesResponse && inventoriesResponse.ok && inventoryBranchsResponse.ok
                                && menuItemIngredientsResponse.ok && orderThresholdsResponse.ok && mergeTablesResponse.ok && orderTypesResponse.ok
                                && paymentsResponse.ok && ratingResponse.ok && receiptsResponse.ok && receiptDetailsResponse.ok && reservationsResponse.ok
                                && restaurantTablesResponse.ok) {

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
                                const billsData = await billsResponse.json();
                                const billDetailsData = await billDetailsResponse.json();
                                const cartsData = await cartsResponse.json();
                                const comboDetailsData = await comboDetailsResponse.json();
                                const deliveriesData = await deliveriesResponse.json();
                                const deliveryDetailsData = await deliveryDetailsResponse.json();
                                const deliveryOrdersData = await deliveryOrdersResponse.json();
                                const deliveryOrderStatussData = await deliveryOrderStatussResponse.json();
                                const deliveryOrderDetailsData = await deliveryOrderDetailsResponse.json();
                                const favoritesData = await favoritesResponse.json();
                                const inventoriesData = await inventoriesResponse.json();
                                const inventoryBranchsData = await inventoryBranchsResponse.json();
                                const menuItemIngredientsData = await menuItemIngredientsResponse.json();
                                const orderThresholdsData = await orderThresholdsResponse.json();
                                const mergeTablesData = await mergeTablesResponse.json();
                                const orderTypesData = await orderTypesResponse.json();
                                const paymentsData = await paymentsResponse.json();
                                const ratingsData = await ratingResponse.json();
                                const receiptsData = await receiptsResponse.json();
                                const receiptDetailsData = await receiptDetailsResponse.json();
                                const reservationsData = await reservationsResponse.json();
                                const restauranTablesData = await restaurantTablesResponse.json();


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
                                postMessage({ type: 'bills', data: billsData });
                                postMessage({ type: 'billDetails', data: billDetailsData });
                                postMessage({ type: 'carts', data: cartsData });
                                postMessage({ type: 'comboDetails', data: comboDetailsData });
                                postMessage({ type: 'deliverys', data: deliveriesData });
                                postMessage({ type: 'deliveryDetails', data: deliveryDetailsData });
                                postMessage({ type: 'deliveryOrders', data: deliveryOrdersData });
                                postMessage({ type: 'deliveryOrderStatuss', data: deliveryOrderStatussData });
                                postMessage({ type: 'deliveryOrderDetails', data: deliveryOrderDetailsData });
                                postMessage({ type: 'favorites', data: favoritesData });
                                postMessage({ type: 'inventories', data: inventoriesData });
                                postMessage({ type: 'inventoryBranches', data: inventoryBranchsData });
                                postMessage({ type: 'menuItemIngredients', data: menuItemIngredientsData });
                                postMessage({ type: 'orderThresholds', data: orderThresholdsData });
                                postMessage({ type: 'mergeTables', data: mergeTablesData });
                                postMessage({ type: 'orderTypes', data: orderTypesData });
                                postMessage({ type: 'payments', data: paymentsData });
                                postMessage({ type: 'ratings', data: ratingsData });
                                postMessage({ type: 'receipts', data: receiptsData });
                                postMessage({ type: 'receiptDetails', data: receiptDetailsData });
                                postMessage({ type: 'reservations', data: reservationsData });
                                postMessage({ type: 'restaurantTables', data: restauranTablesData });
                        } else {
                                // Xử lý trường hợp lỗi nếu cần
                        }
                } catch (error) {
                        console.log(error)
                }
        }
});
