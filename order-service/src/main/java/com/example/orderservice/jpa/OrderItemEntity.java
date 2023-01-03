package com.example.orderservice.jpa;

import com.example.orderservice.dto.OrderDto;
import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "order_item")
public class OrderItemEntity {

    private Long id;
    private ItemEntity item;
    private OrderDto orderDto;
    private int orderPrice; //주문 가격
    private int count; //주문 수량

    /** 주문 취소 (5) : OrderItemEntity */
    public void cancel(){
         getItem().addStock(count);//**
    }
}
