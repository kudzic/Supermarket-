package com.example.Supermarket.product;

import com.example.Supermarket.category.Category;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.Type;
import org.hibernate.type.SqlTypes;

import java.util.UUID;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Builder
@Data

public class Product {
    @Id
    @GeneratedValue(generator = "uuid")
    @GenericGenerator(name="uuid", strategy = "uuid2")
    private String id;
    private String name;
    private Integer price;
    private Integer quantity;


}
