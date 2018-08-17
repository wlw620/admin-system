<template>
  <div>
    <Row>
      <h3>日期</h3>
      <Col :sm="12">
      <DatePicker type="daterange" placement="bottom-end" placeholder="Select date" style="width: 200px"></DatePicker>
      </Col>
    </Row>
    <Row class="margin-t-20">
      <h3>固定表头固定列</h3>
      <Col :sm="12">
      <template>
        <Table width="550" height="200" border :columns="columns2" :data="data4"></Table>
      </template>
      </Col>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      columns2: [
        {
          title: "Name",
          key: "name",
          width: 100,
          fixed: "left"
        },
        {
          title: "Age",
          key: "age",
          width: 100
        },
        {
          title: "Province",
          key: "province",
          width: 100
        },
        {
          title: "City",
          key: "city",
          width: 100
        },
        {
          title: "Address",
          key: "address",
          width: 200
        },
        {
          title: "Postcode",
          key: "zip",
          width: 100
        },
        {
          title: "Action",
          key: "action",
          fixed: "right",
          width: 120,
          render: (h, params) => {
            return h("div", [
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "View"
              ),
              h(
                "Button",
                {
                  props: {
                    type: "text",
                    size: "small"
                  }
                },
                "Edit"
              )
            ]);
          }
        }
      ],
      data4: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        },
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          province: "America",
          city: "New York",
          zip: 100000
        },
        {
          name: "Jim Green",
          age: 24,
          address: "Washington, D.C. No. 1 Lake Park",
          province: "America",
          city: "Washington, D.C.",
          zip: 100000
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          province: "Australian",
          city: "Sydney",
          zip: 100000
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          province: "Canada",
          city: "Ottawa",
          zip: 100000
        }
      ]
    };
  }
};
</script>
