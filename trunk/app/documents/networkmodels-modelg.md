Last updated date: 3/29/2016


In Model G, the network connectivity is supplied to EXOS|Medifit by the client.  In said scenario, the following gear is supported:
+ Orbit
+ Corner
+ Check-in computer
+ Google cloud printer
+ Google Chrome Books (for coach usage)

Common configuration: Leverage client’s ‘guest network’ that may or may not require WPA password connectivity.  Pre-provide client with a list of MAC addresses to exclude equipment from captive web portal if client has such a configuration.  Network IP’s, DNS and subnetmask provided via DHCP.

Model G network requirements – to be provided by client:
+ Wireless network connectivity (in fitness/performance center space)
  - 2.4ghz
  - 5ghz (not required)
  - Can NOT support a captive web portal
+ Network connectivity
  - Speed
    * minimum: 1/mbps symmetrical
    * recommended: 5/mbps symmetrical
  - Inbound ports: none
  - Outbound ports
    * 80
    * 443
    * 5222 (from printer only)
    * NTP
    * DNS (if internal DNS servers not provided)
    * Device to device communication: NONE
    * IP assignment: support both static and DHCP