package com.example.Supermarket.service;

import com.example.Supermarket.category.Category;
import com.example.Supermarket.repository.CategoryRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class CategoryService {
    private final CategoryRepository categoryRepository;

    public List<Category> getAllCategory(){
        return categoryRepository.findAll();
    }
    public void addCategory(Category category){
        categoryRepository.save(category);
    }

    public void deleteCategory(Integer id)throws Exception{
        if(categoryRepository.existsById(id)){
            categoryRepository.deleteById(id);
        }
        throw new Exception("Category not found");
    }

    public void updateCategory(Category category,Integer id)throws Exception{
        if(categoryRepository.existsById(id)){
            Category category1=categoryRepository.findCategoryById(id);
            category1.setName(category.getName());
            category1.setProduct(category.getProduct());
            categoryRepository.save(category1);
        }
        throw new Exception("Category does not exist");
    }
}
