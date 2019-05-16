<template>
  <div class="container">
    <h2 class="mb-1">Build Your canvas!</h2>
    <i class="fas fa-pencil-alt mb-1"></i>
    <p class="mb-2">
      We'll guide you through the LEAN canvas creation here. This canvas is an
      excellent tool that will help you to find value propositions and build a
      solid business model you can share with other LEANies and LEANers. This
      way mentors and investors (LEANers) can see your project in a cool and
      easy way and guide you to success!
    </p>
    <CustomerCard />
    <ProblemCard />
    <ValueCard />
    <RevenueCard />
    <CostsCard />
    <SolutionCard />
    <MetricsCard />
    <ChannelsCard />
    <AdvantageCard />
  </div>
</template>

<script>
import CustomerCard from "@/components/Wizard/CustomerCard";
import ProblemCard from "@/components/Wizard/ProblemCard";
import ValueCard from "@/components/Wizard/ValueCard";
import RevenueCard from "@/components/Wizard/RevenueCard";
import CostsCard from "@/components/Wizard/CostsCard";
import SolutionCard from "@/components/Wizard/SolutionCard";
import MetricsCard from "@/components/Wizard/MetricsCard";
import ChannelsCard from "@/components/Wizard/ChannelsCard";
import AdvantageCard from "@/components/Wizard/AdvantageCard";

export default {
  components: {
    CustomerCard,
    ProblemCard,
    ValueCard,
    RevenueCard,
    CostsCard,
    SolutionCard,
    MetricsCard,
    ChannelsCard,
    AdvantageCard
  },
  name: "Wizard",
  data() {
    return {};
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "@/assets/style.scss";
</style>
