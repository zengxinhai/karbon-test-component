import { shallowMount } from "@vue/test-utils";
import TestComponent from "@/components/test.vue";

describe("HelloWorld.vue", () => {
  it("renders props.msg when passed", () => {
    const wrapper = shallowMount(TestComponent);
    expect(wrapper.text()).toMatch('Hello World');
  });
});
