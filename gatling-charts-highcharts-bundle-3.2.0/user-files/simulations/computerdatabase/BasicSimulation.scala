package computerdatabase // 1

import io.gatling.core.Predef._ // 2
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation { // 3
	
  val httpConf = http // 4
    .baseUrl("http://computer-database.gatling.io") // 5
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8") // 6
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Windows NT 5.1; rv:31.0) Gecko/20100101 Firefox/31.0")

  val scn = scenario("BasicSimulation")
    .exec(http("request_1") // 8
      .get("/")) // 9
    .pause(6) // 10
  val admins = scenario("Admins")
    .exec(http("request_1") // 8
      .get("/")) // 9
    .pause(6) // 10
  setUp( // 11
    scn.inject(atOnceUsers(1000)),
    admins.inject(atOnceUsers(3000))
  ).protocols(httpConf) // 13
}