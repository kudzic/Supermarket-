package com.example.Supermarket.orders;

import com.example.Supermarket.entity.OrdersUser;
import com.example.Supermarket.repository.OrderRepository;
import com.example.Supermarket.repository.UserOrdersRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/orders")
@RequiredArgsConstructor
public class OrdersController {
    private final OrderRepository orderRepository;
    private final UserOrdersRepository userOrdersRepository;
    @GetMapping("/allOrders")
    public List<Orders> getOrderDetails(){
        return orderRepository.findAll();
    }

    @GetMapping("/customerOrders/{customerId}")
    public List<Orders> getCustomerOrders(@PathVariable int customerId){
        return orderRepository.findOrdersByCustomerId(customerId);
    }

    @GetMapping("/customerOrder/{orderId}")
    public Orders getCustomerOrders(@PathVariable Integer orderId){
        return orderRepository.findOrdersByOrderId(orderId);
    }
    @PostMapping("/addOrder")
    public ResponseEntity<String> addCustomerOrders(@RequestBody Orders order){
        orderRepository.save(order);
       return ResponseEntity.ok("Order has been added");
    }
}
