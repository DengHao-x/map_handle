<template>
    <div class="xmlDemo">
        <MyProcessViewer key="designer" v-model="bpmnXML" v-bind="bpmnControlForm" :activityData="activityData"
        :processInstanceData="processInstanceData" :taskData="taskData" ></MyProcessViewer>
    </div>
  </template>
  
  <script>
import MyProcessViewer from "./MyProcessViewer.vue";
  export default {
    name: 'xmlDemo',
    components: {
        MyProcessViewer,
    },
    data() {
      return {
        bpmnXML:'<?xml version="1.0" encoding="UTF-8"?> <definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:omgdi="http://www.omg.org/spec/DD/20100524/DI" xmlns:omgdc="http://www.omg.org/spec/DD/20100524/DC" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="sid-38422fae-e03e-43a3-bef4-bd33b32041b2" targetNamespace="http://bpmn.io/bpmn" exporter="bpmn-js (https://demo.bpmn.io)" exporterVersion="5.1.2"> <process id="Process_1" isExecutable="false"> <startEvent id="StartEvent_ops_coffee" name="开始"> <outgoing>Flow_0jfbnmb</outgoing> </startEvent> <sequenceFlow id="Flow_0jfbnmb" sourceRef="StartEvent_ops_coffee" targetRef="Activity_0pih3d0" /> <task id="Activity_0pih3d0" name="流程1"> <incoming>Flow_0jfbnmb</incoming> <outgoing>Flow_0ow8zy1</outgoing> </task> <task id="Activity_07b4aeg" name="流程2"> <incoming>Flow_0ow8zy1</incoming> <outgoing>Flow_0iaccmi</outgoing> </task> <sequenceFlow id="Flow_0ow8zy1" sourceRef="Activity_0pih3d0" targetRef="Activity_07b4aeg" /> <task id="Activity_11xlozw" name="流程3"> <incoming>Flow_0iaccmi</incoming> <outgoing>Flow_0bax3n1</outgoing> </task> <sequenceFlow id="Flow_0iaccmi" sourceRef="Activity_07b4aeg" targetRef="Activity_11xlozw" /> <sequenceFlow id="Flow_0bax3n1" sourceRef="Activity_11xlozw" targetRef="Event_07dyz8d" /> <endEvent id="Event_07dyz8d" name="結束"> <incoming>Flow_0bax3n1</incoming> </endEvent> </process> <bpmndi:BPMNDiagram id="BpmnDiagram_1"> <bpmndi:BPMNPlane id="BpmnPlane_1" bpmnElement="Process_1"> <bpmndi:BPMNEdge id="Flow_0jfbnmb_di" bpmnElement="Flow_0jfbnmb"> <omgdi:waypoint x="188" y="120" /> <omgdi:waypoint x="300" y="120" /> </bpmndi:BPMNEdge> <bpmndi:BPMNEdge id="Flow_0ow8zy1_di" bpmnElement="Flow_0ow8zy1"> <omgdi:waypoint x="400" y="120" /> <omgdi:waypoint x="530" y="120" /> </bpmndi:BPMNEdge> <bpmndi:BPMNEdge id="Flow_0iaccmi_di" bpmnElement="Flow_0iaccmi"> <omgdi:waypoint x="630" y="120" /> <omgdi:waypoint x="780" y="120" /> </bpmndi:BPMNEdge> <bpmndi:BPMNEdge id="Flow_0bax3n1_di" bpmnElement="Flow_0bax3n1"> <omgdi:waypoint x="880" y="120" /> <omgdi:waypoint x="1032" y="120" /> </bpmndi:BPMNEdge> <bpmndi:BPMNShape id="StartEvent_1y45yut_di" bpmnElement="StartEvent_ops_coffee"> <omgdc:Bounds x="152" y="102" width="36" height="36" /> <bpmndi:BPMNLabel> <omgdc:Bounds x="159" y="153" width="22" height="14" /> </bpmndi:BPMNLabel> </bpmndi:BPMNShape> <bpmndi:BPMNShape id="Activity_0pih3d0_di" bpmnElement="Activity_0pih3d0"> <omgdc:Bounds x="300" y="80" width="100" height="80" /> </bpmndi:BPMNShape> <bpmndi:BPMNShape id="Activity_11xlozw_di" bpmnElement="Activity_11xlozw"> <omgdc:Bounds x="780" y="80" width="100" height="80" /> </bpmndi:BPMNShape> <bpmndi:BPMNShape id="Activity_07b4aeg_di" bpmnElement="Activity_07b4aeg"> <omgdc:Bounds x="530" y="80" width="100" height="80" /> </bpmndi:BPMNShape> <bpmndi:BPMNShape id="Event_07dyz8d_di" bpmnElement="Event_07dyz8d"> <omgdc:Bounds x="1032" y="102" width="36" height="36" /> <bpmndi:BPMNLabel> <omgdc:Bounds x="1039" y="145" width="22" height="14" /> </bpmndi:BPMNLabel> </bpmndi:BPMNShape> </bpmndi:BPMNPlane> </bpmndi:BPMNDiagram> </definitions>',
        bpmnControlForm: {
            prefix: "camunda"
        },
        activityData:[
            {
                key:'Activity_0pih3d0',
                taskId:1
            },
            {
                key:'Activity_07b4aeg',
                taskId:2
            }
        ],
        processInstanceData:{
            
        },
        taskData:[
            {
                id:1,
                result:1,
            }
        ],
      }
    },
    mounted(){
      
    },
    methods:{

    }
  }
  </script>
  
  <style>
  /*流程高亮*/
.highlight .djs-visual > :nth-child(1) {
  stroke: green !important;
  fill: rgba(0, 80, 0, 0.4) !important;
}
.highlightFlow .djs-visual > :nth-child(1) {
  stroke: green !important;
}
.highlightIDO .djs-visual > :nth-child(1) {
  stroke: rgb(255, 196, 0) !important;
  fill: rgba(255, 196, 0, 0.4) !important;
}
.highlightTODO .djs-visual > :nth-child(1) {
  stroke: rgb(30, 144, 255) !important;
  fill: rgba(255, 255, 255, 0.4) !important;
}

  </style>
  