package com.example.Supermarket.category;

import com.example.Supermarket.service.CategoryService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/category")
@RequiredArgsConstructor
public class CategoryController {
    private final CategoryService categoryService;

    @GetMapping("/allCategories")
    public List<Category> getCategories(){
        return categoryService.getAllCategory();
    }

    @PostMapping("/addCategory")
    public ResponseEntity<String> addCategory(@RequestBody Category category){
        categoryService.addCategory(category);
        return ResponseEntity.ok("Category has been added successfully");
    }

    @DeleteMapping("/deleteCategory/{id}")
    public ResponseEntity<String> deleteCategory(@PathVariable Integer id)throws Exception{
        categoryService.deleteCategory(id);
        return ResponseEntity.ok("Category has been deleted");
    }

    @PutMapping("/updateCategory/{id}")
    public ResponseEntity<Category> updateCategory(@PathVariable Integer id,@RequestBody Category category)throws Exception{
        categoryService.updateCategory(category,id);
        return ResponseEntity.ok(category);
    }

}
