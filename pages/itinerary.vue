<template>
  <Card class="md:max-w-2xl w-4/5">
    <div>
      <Heading class="mb-4" :title="$t('message.itinerary')"></Heading>
      <dl class="mb-4">
        <dt class="font-bold">📍{{ $t('message.departure')}}</dt>
        <dd><a href="https://goo.gl/maps/L3Hus3g38y7XNxQQ8" class="text-blue-700 underline">{{$t('message.departure_place')}}</a></dd>
<!--<dd>({{$t('message.comment_departure_bus_stop')}})</dd>-->
        <dt class="font-bold mt-4">📍{{ $t('message.arrival')}}</dt>
        <dd>{{$t('message.arrival_place')}}</dd>
      </dl>
      <iframe src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d11068.032157465364!2d9.03173199559562!3d46.09081716581235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e2!4m5!1s0x4784373b1fc15bad%3A0x730d84e4bb16b470!2sBogno%2C%206951%20Lugano%2C%20Switzerland!3m2!1d46.089999999999996!2d9.062339999999999!4m5!1s0x4784341c9568f2f3%3A0xd09d46bf434724a7!2sCorticiasca%2C%20Capriasca%2C%20Switzerland!3m2!1d46.0867!2d9.01703!5e0!3m2!1sen!2sin!4v1675869287235!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>    </div>
  </Card>
</template>

<script>
import Vue from 'vue'
import Card from '~/components/card.vue';
import Heading from '~/components/heading.vue';

export default Vue.extend({
  name: "Itinerary",
})
</script>