import http from "k6/http";

export let options = {
	insecureSkipTLSVerify: true,
	noConnectionReuse: true,
	noVUConnectionReuse: true,
	tlsCipherSuites: [
		"TLS_ECDHE_RSA_WITH_AES_128_CBC_SHA256",
	]
};

export default function() {
	http.get(`https://${__ENV.HELLONGINX_SERVICE_HOST}:9000`);
}
