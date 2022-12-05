import http from "@/plugins/request";

export function reqTesting() {
  return http.get("/testModule/testAction");
}
