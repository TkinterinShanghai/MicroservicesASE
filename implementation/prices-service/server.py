import flask
from flask import request, jsonify
from controllers import searchItemData


app = flask.Flask(__name__)
app.config["DEBUG"] = True


@app.route("/", methods=["GET"])
def home():
    try:
        return jsonify(
            {"articles": searchItemData.get_articles(request.args["article"])}
        )
    except KeyError:
        return jsonify({"message": "Enter a valid article"})
    except SyntaxError:
        print("Fix your syntax error")


if __name__ == "__main__":
    app.run(host="0.0.0.0")
