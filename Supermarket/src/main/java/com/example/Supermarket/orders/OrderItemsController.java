package com.example.Supermarket.orders;

import com.example.Supermarket.repository.OrderItemsRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/v1/orderitems")
@RequiredArgsConstructor
public class OrderItemsController {

    private final OrderItemsRepository orderItemsRepository;
    @GetMapping("/orderItems")
    public ResponseEntity<List<OrdersItems>> getAllOrderItems(){
        return ResponseEntity.ok(orderItemsRepository.findAll());
    }

    @GetMapping("/orderItem/{id}")
    public ResponseEntity<OrdersItems> getOrderItem(@PathVariable("id") Integer id){
        return ResponseEntity.ok(orderItemsRepository.findOrdersItemsByOrderItemId(id));
    }
}
