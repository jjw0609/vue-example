import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "Home" },
    component: HomeView,
  },
  {
    path: "/data",
    name: "DataBinding1",
    meta: { title: "데이타바인딩" },
    children: [
      {
        path: "binding1",
        meta: { title: "데이터바인딩" },
        component: () =>
          import(
            /* webpackChunkName: "databing1" */ "../views/directives/DataBinding1.vue"
          ),
      },
      {
        path: "binding2",
        meta: { title: "데이터바인딩(html)" },
        component: () =>
          import(
            /* webpackChunkName: "databing1" */ "../views/directives/DataBindingHtml2.vue"
          ),
      },
      {
        //
        path: "binding3",
        meta: { title: "데이터바인딩(InputText)" },
        component: () =>
          import(
            /* webpackChunkName: "databing1" */ "../views/directives/DataBindingInputText3.vue"
          ),
      },
      {
        //
        path: "binding4",
        meta: { title: "데이터바인딩(TextArea)" },
        component: () =>
          import(
            /* webpackChunkName: "databing1" */ "../views/directives/DataBindingTextarea4.vue"
          ),
      },
      {
        //
        path: "binding5",
        meta: { title: "데이터바인딩(Select)" },
        component: () =>
          import(
            /* webpackChunkName: "databing1" */ "../views/directives/DataBindingSelect5.vue"
          ),
      },
      {
        //
        path: "binding6",
        meta: { title: "데이터바인딩(체크박스)" },
        component: () =>
          import(
            /* webpackChunkName: "databing6" */ "../views/directives/DataBindingCheckbox6.vue"
          ),
      },
      {
        //
        path: "binding7",
        meta: { title: "데이터바인딩(체크박스-2)" },
        component: () =>
          import(
            /* webpackChunkName: "databing7" */ "../views/directives/DataBindingCheckbox7.vue"
          ),
      },
      {
        //
        path: "binding8",
        meta: { title: "데이터바인딩(라디오버튼)" },
        component: () =>
          import(
            /* webpackChunkName: "databing8" */ "../views/directives/DataBindingRadio8.vue"
          ),
      },
    ],
  },
  {
    path: "/vbind",
    meta: { title: "바인딩(v-bind)" },
    children: [
      {
        path: "binding9",
        meta: { title: "데이터바인딩-Attr(속성)" },
        component: () =>
          import(
            /* webpackChunkName: "databing9" */ "../views/vbind/DataBindingAttr9.vue"
          ),
      },
      {
        path: "binding10",
        meta: { title: "데이터바인딩-버튼" },
        component: () =>
          import(
            /* webpackChunkName: "databing10" */ "../views/vbind/DataBindingButton10.vue"
          ),
      },
      {
        path: "binding11",
        meta: { title: "데이터바인딩-class" },
        component: () =>
          import(
            /* webpackChunkName: "databing11" */ "../views/vbind/DataBindingClass11.vue"
          ),
      },
      {
        path: "binding12",
        meta: { title: "데이터바인딩-class2" },
        component: () =>
          import(
            /* webpackChunkName: "databing12" */ "../views/vbind/DataBindingClass12.vue"
          ),
      },
      {
        path: "binding13",
        meta: { title: "데이터바인딩-for문" },
        component: () =>
          import(
            /* webpackChunkName: "databing13" */ "../views/vfor/DataBindingList13.vue"
          ),
      },
      {
        path: "binding14",
        meta: { title: "데이터바인딩-if문" },
        component: () =>
          import(
            /* webpackChunkName: "databing14" */ "../views/vif/DataBindingIf14.vue"
          ),
      },
      {
        path: "binding15",
        meta: { title: "이벤트 클릭" },
        component: () =>
          import(
            /* webpackChunkName: "databing15" */ "../views/von/EventClick15.vue"
          ),
      },
      {
        path: "binding16",
        meta: { title: "이벤트 체인지" },
        component: () =>
          import(
            /* webpackChunkName: "databing16" */ "../views/von/EventChange16.vue"
          ),
      },
      {
        path: "binding17",
        meta: { title: "이벤트 키" },
        component: () =>
          import(
            /* webpackChunkName: "databing17" */ "../views/von/EventKey17.vue"
          ),
      },
      {
        path: "binding18",
        meta: { title: "함수학습-1" },
        component: () =>
          import(
            /* webpackChunkName: "databing18" */ "../views/functions/MethodVSComputed1.vue"
          ),
      },
      {
        path: "binding19",
        meta: { title: "함수학습-2(Computed 예제)" },
        component: () =>
          import(
            /* webpackChunkName: "databing19" */ "../views/functions/MethodVSComputed2.vue"
          ),
      },
      {
        path: "binding20",
        meta: { title: "함수학습-2(Computed 예제)" },
        component: () =>
          import(
            /* webpackChunkName: "databing20" */ "../views/functions/MethodWatch3.vue"
          ),
      },
      {
        path: "binding21",
        meta: { title: "라이프 사이클 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing21" */ "../views/lifeCycle/LifeCycleEvent1.vue"
          ),
      },
      {
        path: "binding22",
        meta: { title: "엑시오스-Get 방식 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing22" */ "../views/axios/AxiosGet1.vue"
          ),
      },
      {
        path: "binding23",
        meta: { title: "엑시오스-Post 방식 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing23" */ "../views/axios/AxiosPost2.vue"
          ),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
