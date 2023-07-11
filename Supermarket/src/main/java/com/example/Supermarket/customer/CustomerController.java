package com.example.Supermarket.customer;

import com.example.Supermarket.cart.ShoppingCart;
import com.example.Supermarket.cart.ShoppingCartItems;
import com.example.Supermarket.repository.CustomerRepository;
import com.example.Supermarket.service.CustomerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/customer")
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping("/addCustomer")
    public String addCustomer(@RequestBody Customer customer){
        customerService.addCustomer(customer);
        return customer.getName()+ " has been added";
    }

    @GetMapping("/cart/{customerId}")
    public ShoppingCart getShoppingCart(@PathVariable Integer customerId){
        return customerService.getShoppingCart(customerId);
    }

    @GetMapping("/cart/{customerId}/shopping-cart/items")
    public List<ShoppingCartItems> getShoppingCartItems(@PathVariable Integer customerId){
        return customerService.getShoppingCartItems(customerId);
    }
    @PostMapping("/add/{customerId}/shopping-cart/add-product")
    public String addCart(@RequestBody ShoppingCartItems shoppingCartItems,@PathVariable  Integer customerId){
        customerService.addShoppingCart(shoppingCartItems,customerId);
        return "Added to cart";
    }

    @PostMapping("/delete/{customerId}/shopping-cart/remove-product")
    public String removeCart(@RequestBody  ShoppingCartItems shoppingCartItems,@PathVariable Integer customerId){
        customerService.removeShoppingCart(shoppingCartItems,customerId);
        return shoppingCartItems.getProductId() + "has been removed from cart";
    }

}
