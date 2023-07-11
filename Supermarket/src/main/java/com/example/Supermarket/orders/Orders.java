package com.example.Supermarket.orders;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import com.example.Supermarket.entity.*;

import javax.print.attribute.standard.JobOriginatingUserName;
import java.util.Date;

@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class Orders {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer orderId;
    private Integer customerId;
    private Date orderDate=new Date();
    private Integer totalAmount;
    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="fk_user_id")
    private OrdersUser users;

}
