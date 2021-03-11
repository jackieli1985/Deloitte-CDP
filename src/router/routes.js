import Index from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    component: Index,
    children: [],
    meta: {
      title: "Index",
      requireAuth: true
    }
  },
  {
    path: "/index",
    component: Index,
    children: [],
    meta: {
      title: "Index",
      requireAuth: true
    }
  }
];

export default routes;
