package computerdatabase.advanced

import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class AdvancedSimulationStep01 extends Simulation {
  object Browse {

    val browse = exec(http("Home")
      .get("/"))
      .pause(1)
      .exec(http("Crawl Reuqests")
        .get("/#/crawl-requests"))
      .pause(1)
      .exec(http("View Crawl Request")
        .get("/#/crawl-requests/5661077777940480/view"))
        .pause(1)
      .exec(http("Edit Crawl Request")
        .get("/#/crawl-requests/5661077777940480/edit"))
      .pause(1)
      .exec(http("Tags")
        .get("/#/tags"))
      .pause(1)
      .exec(http("Trash Items")
        .get("/#/trash"))
  }

  val httpProtocol = http
    .baseUrl("https://broadcom-dev.appspot.com")
    .acceptHeader("text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8")
    .doNotTrackHeader("1")
    .acceptLanguageHeader("en-US,en;q=0.5")
    .acceptEncodingHeader("gzip, deflate")
    .userAgentHeader("Mozilla/5.0 (Macintosh; Intel Mac OS X 10.8; rv:16.0) Gecko/20100101 Firefox/16.0")

  val users = scenario("Users").exec(Browse.browse)

  setUp(
    users.inject(atOnceUsers(80))
  ).protocols(httpProtocol)
}
