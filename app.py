from flask import Flask, request, render_template
from flask_cors import CORS, cross_origin
import flask.scaffold
flask.helpers._endpoint_from_view_func = flask.scaffold._endpoint_from_view_func
from flask_restful import Resource, Api

import chess
import chess.svg
import re
import requests

from chess_engine.board_env import BoardEnv
from chess_engine.helper import Helper

app = Flask(__name__)
api = Api(app)

CORS(app, resources={r"/*": {"origins": "*"}})
app.config['CORS_HEADERS'] = 'Content-Type'

env = BoardEnv()

@app.route('/')
def get():
    return render_template('index.html')

@app.route('/new-game', methods=["GET"])
def get_new_board():
    env.reset_game()
    return {"svg_board": env.get_svg_board(), "moves": env.get_legal_moves()}

@app.route('/play-move', methods=["POST"])
def play_move():
    input_json = request.get_json(force=True)
    env.play_move(input_json['move'])
    result = env.board.result()
    if result != "*":
        win = False if result == '1/2-1/2' else True
        return {"svg_board": env.get_svg_board(), "moves": None, "winner": win, "toMove": env.board.turn}
    else:
        engine_move = env.get_next_move()
        env.play_move(engine_move)
        if env.board.result() != "*":
            win = False if result == '1/2-1/2' else True
            return {"svg_board": env.get_svg_board(), "moves": None, "winner": win, "toMove": env.board.turn}
        else:
            return {"svg_board": env.get_svg_board(), "moves": env.get_legal_moves(), "winner": None, "toMove": env.board.turn}


if __name__ == '__main__':
    app.run(port=5002)