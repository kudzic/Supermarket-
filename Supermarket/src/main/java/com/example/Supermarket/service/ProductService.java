package com.example.Supermarket.service;

import com.example.Supermarket.product.Product;
import com.example.Supermarket.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class ProductService {
    private final ProductRepository productRepository;


    public List<Product> getAllProducuts(){
        return productRepository.findAll();
    }

    public Product getProductById(String id) throws Exception {
        if(productRepository.existsById(id)){
            return productRepository.findProductById(id);
        }
        else {
            throw new Exception("The product does not exist");
        }
    }

    public void addProduct(Product product){
        productRepository.save(product);
    }

    public void updateProduct(String id,Product product)throws Exception{
        if(productRepository.existsById(id)) {
            Product product1=productRepository.findProductById(id);
            product1.setName(product.getName());
            product1.setPrice(product.getPrice());
            product1.setQuantity(product.getQuantity());
            productRepository.save(product1);
        }
        else{
            throw new Exception("Product not found");
        }
    }

    public void deleteProduct(String id)throws Exception{
        if(productRepository.existsById(id)){
        productRepository.deleteById(id);}
        else{
            throw new Exception("Product not found");
        }

    }

}
