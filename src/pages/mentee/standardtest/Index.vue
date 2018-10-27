<template>
  <div class="container-box prize-container">
    <Card class="card-red blue">
      <p slot="title">
        {{$t('prize.cardTxt1')}}
        <span>222</span>
      </p>
    </Card>
    <Card class="card-red yellow">
      <p slot="title">
        {{$t('prize.cardTxt1')}}
        <span>222</span>
      </p>
    </Card>
    <Card class="card-red green">
      <p slot="title">
        {{$t('prize.cardTxt1')}}
        <span>222</span>
      </p>
    </Card>
  </div>
</template>

<script>
</script>

<style lang="less">
.prize-container {
  .ivu-card-head {
    p {
      color: #fff;
      font-size: 18px;
    }
  }
  .blue {
    .ivu-card-head {
      background: #0095fe;
    }
  }
  .yellow {
    .ivu-card-head {
      background: #f67100;
    }
  }.green {
    .ivu-card-head {
      background: #0bac00;
    }
  }
}
</style>
