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
    meta: { title: "데이터바인딩" },
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
      {
        path: "binding24",
        meta: { title: "엑시오스-html태그에 바인딩 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing24" */ "../views/axios/AxiosPost3.vue"
          ),
      },
      {
        path: "binding25",
        meta: { title: "엑시오스-전역객체 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing25" */ "../views/axios/AxiosGlobal4.vue"
          ),
      },
      {
        path: "binding26",
        meta: { title: "엑시오스-동기화 예제" },
        component: () =>
          import(
            /* webpackChunkName: "databing26" */ "../views/axios/AxiosSync5.vue"
          ),
      },
      {
        path: "binding27",
        meta: { title: "컴포넌트 개념" },
        component: () =>
          import(
            /* webpackChunkName: "databing27" */ "../views/compo/ParentComponent.vue"
          ),
      },
      {
        path: "binding28",
        meta: { title: "컴포넌트 부모-자식 이벤트 호출" },
        component: () =>
          import(
            /* webpackChunkName: "databing28" */ "../views/props/ParentCompo1.vue"
          ),
      },
      {
        path: "binding29",
        meta: { title: "컴포넌트 자식->부모 Emit 호출" },
        component: () =>
          import(
            /* webpackChunkName: "databing29" */ "../views/props/ParentCompoEmit3.vue"
          ),
      },
      {
        path: "binding30",
        meta: { title: "슬롯 -> 기본개념" },
        component: () =>
          import(
            /* webpackChunkName: "databing30" */ "../views/slot/SlotParent.vue"
          ),
      },
      {
        path: "binding31",
        meta: { title: "슬롯 -> 응용" },
        component: () =>
          import(
            /* webpackChunkName: "databing31" */ "../views/slot/SlotUseModalLayout.vue"
          ),
      },
      {
        path: "binding32",
        meta: { title: "프로바이드-인젝트" },
        component: () =>
          import(
            /* webpackChunkName: "databing32" */ "../views/provideinject/BigComponent.vue"
          ),
      },
      {
        path: "binding33",
        meta: { title: "믹스드인 - mixed in" },
        component: () =>
          import(
            /* webpackChunkName: "provide" */ "../views/mixin/UseMixinExample3.vue"
          ),
      },
      {
        path: "binding34",
        meta: { title: "계산기-옵셔널 예제" },
        component: () =>
          import(
            /* webpackChunkName: "provide" */ "../views/composition/CalculatorOptional.vue"
          ),
      },
    ],
  },
  {
    path: "/compo",
    name: "CompositionApi1",
    meta: { title: "컴포지션 API" },
    children: [
      {
        path: "compo1",
        meta: { title: "컴포지션 API - 계산기" },
        component: () =>
          import(
            /* webpackChunkName: "compo1" */ "../views/composition/CalculatorComposition1.vue"
          ),
      },
      {
        path: "compo2",
        meta: { title: "컴포지션 API - Ref 예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo2" */ "../views/composition/CompositionRef2.vue"
          ),
      },
      {
        path: "compo3",
        meta: { title: "컴포지션 API - Function 예제" },
        component: () =>
          import(
            /* webpackChunkName: "compo3" */ "../views/composition/CompositionFunction3.vue"
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
