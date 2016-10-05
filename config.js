var node_env = process.env.NODE_ENV || "development";

var config = {};

if (node_env == "production") {
	config.port = process.env.PORT;
	config.appSecret1 = process.env.APPSEC1;
	config.appSecret2 = process.env.APPSEC2;
} else if (node_env == "test") {
	config.appSecret1 = "My Home Page blah blah";
	config.appSecret2 = "lksjlkjflksjd klajdalkjdlkjmlkasjmlkasjdklasjdwqla;dkqkopqkeopqw";
	config.port = 3000;
} else if (node_env == "development") {
	config.appSecret1 = "My Home Page blah blah";
	config.appSecret2 = "lksjlkjflksjd klajdalkjdlkjmlkasjmlkasjdklasjdwqla;dkqkopqkeopqw";
	config.port = 3000;
}

module.exports = config;
