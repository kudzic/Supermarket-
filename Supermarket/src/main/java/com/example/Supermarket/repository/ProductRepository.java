package com.example.Supermarket.repository;

import com.example.Supermarket.product.Product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;



import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product,String> {

   Product findProductById(String id);


}
