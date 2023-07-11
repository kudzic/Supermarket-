package com.example.Supermarket.service;

import com.example.Supermarket.cart.ShoppingCart;
import com.example.Supermarket.cart.ShoppingCartItems;
import com.example.Supermarket.customer.Customer;
import com.example.Supermarket.repository.CustomerRepository;
import com.example.Supermarket.repository.ShoppingCartRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@RequiredArgsConstructor

public class CustomerService {
    private final CustomerRepository customerRepository;
    private final ShoppingCartRepository shoppingCartRepository;

    public Customer getCustomer(Integer id){
        return customerRepository.findCustomerByCustomerId(id);
    }


    public void addCustomer(Customer customer){
        customerRepository.save(customer);
    }

    public ShoppingCart getShoppingCart(Integer customerId){
        Customer customer= getCustomer(customerId);
        return shoppingCartRepository.findShoppingCartById(customer.getShoppingCart().getId());
    }

    public List<ShoppingCartItems> getShoppingCartItems(Integer customerId){
        Customer customer=getCustomer(customerId);
        return customer.getShoppingCart().getShoppingCartItems();
    }

    public void addShoppingCart(ShoppingCartItems shoppingCartItems,Integer customerId){
        Customer customer=getCustomer(customerId);
        customer.getShoppingCart().getShoppingCartItems().add(shoppingCartItems);
    }

    public void removeShoppingCart(ShoppingCartItems shoppingCartItems,Integer customerId){
        Customer customer=getCustomer(customerId);
        customer.getShoppingCart().getShoppingCartItems().remove(shoppingCartItems);
    }

    public ShoppingCart checkOut(Integer customerId){
        Customer customer=getCustomer(customerId);
        return customer.getShoppingCart();
    }



}
