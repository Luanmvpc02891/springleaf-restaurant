// package com.springleaf_restaurant_backend.user.restcontrollers;

// import java.util.List;

// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RestController;

// import com.springleaf_restaurant_backend.user.entities.Delivery;
// import com.springleaf_restaurant_backend.user.repositories.DeliveryRepository;

// @RestController
// @RequestMapping("/api")
// public class DeliveryRestController {
//     @Autowired
//     private DeliveryRepository deliveryRepository;

//     @GetMapping("/deliveries")
//     public List<Delivery> getDeliveries() {
//         return deliveryRepository.findAll();
//     }
// }
