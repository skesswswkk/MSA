package com.example.orderservice.jpa;

import com.example.orderservice.dto.DeliveryDto;
import com.example.orderservice.dto.DeliveryStatus;
import com.example.orderservice.dto.OrderStatus;
import lombok.Data;
import org.hibernate.annotations.ColumnDefault;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;

@Data
@Entity
@Table(name="orders")
public class OrderEntity implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 120, unique = true)
    private String productId;
    @Column(nullable = false)
    private Integer qty;
    @Column(nullable = false)
    private Integer unitPrice;
    @Column(nullable = false)
    private Integer totalPrice;

    @Column(nullable = false)
    private String userId;
    @Column(nullable = false, unique = true)
    private String orderId;

    @Column(nullable = false, updatable = false, insertable = false)
    @ColumnDefault(value = "CURRENT_TIMESTAMP")
    private Date createdAt;

    @Column(nullable = false)
    private DeliveryDto deliveryDto;

    public void setDelivery(DeliveryDto deliveryDto) {
        this.deliveryDto = deliveryDto;
        deliveryDto.setOrderEntity(this);
    }

    private OrderStatus orderStatus;
    private OrderItemEntity orderItem;

    /** 주문 취소 (4) : OrderEntity */
    public void cancel() {
        if (deliveryDto.getDeliveryStatus() == DeliveryStatus.COMP) {
            throw new IllegalStateException("이미 배송완료된 상품은 취소가 불가능합니다.");
        }

        this.setOrderStatus(OrderStatus.CANCEL);

        orderItem.cancel();
    }
}
