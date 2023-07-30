<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
          <th>배송료</th>
        </tr>
      </thead>
      <tbody>
        <!-- v-for="item, index) in items" 형식을 사용. 여기서 items는 배열을 의미 -->
        <tr v-for="(product, i) in productList" :key="i">
          <td>{{ product.product_name }}</td>
          <td>{{ product.pridce }}</td>
          <td>{{ product.category }}</td>
          <td>{{ product.delivery_price }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      productList: [
        {
          product_name: "기계식키보드",
          price: 25000,
          category: "노트북/태블릿",
          delivery_price: 5000,
        },
        {
          product_name: "무선마우스",
          price: 12000,
          category: "노트북/태블릿",
          delivery_price: 5000,
        },
        {
          product_name: "아이패드",
          price: 725000,
          category: "노트북/태블릿",
          delivery_price: 5000,
        },
        {
          product_name: "태블릿거치대",
          price: 32000,
          category: "노트북/태블릿",
          delivery_price: 5000,
        },
        {
          product_name: "무선충전기",
          price: 42000,
          category: "노트북/태블릿",
          delivery_price: 5000,
        },
      ],
    };
  },
};
</script>

<style scoped></style>
