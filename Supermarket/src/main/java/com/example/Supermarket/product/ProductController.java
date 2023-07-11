package com.example.Supermarket.product;

import com.example.Supermarket.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/v1/product")
@RequiredArgsConstructor
public class ProductController {
    private final ProductService productService;

    @GetMapping("/products")
    public List<Product> products(){
        return productService.getAllProducuts();
    }

    @GetMapping("/product")
    public Product product(@RequestBody ProductId productId)throws Exception{
       return productService.getProductById(productId.getId());
    }

    @PostMapping("/add")
    public String addProduct(@RequestBody Product product){
        productService.addProduct(product);
        return "Product has been added";
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable String id,@RequestBody Product product)throws  Exception{
        productService.updateProduct(id,product);
        return ResponseEntity.ok(product);
    }
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteProduct(@PathVariable String id)throws Exception{
        productService.deleteProduct(id);
        return ResponseEntity.ok("Product has been deleted");
    }





}
