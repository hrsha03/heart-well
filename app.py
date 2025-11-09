from flask import Flask, render_template, request
from model.predictor import predict_heart_disease_rf

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def index():
    risk = None
    label = None
    form_data = {}
    show_prediction = False
    if request.method == 'POST':
        if 'reset' in request.form:
            form_data = {}
            show_prediction = False
        else:
            form_data = request.form.to_dict()
            user_data = {
                'Age': int(request.form['age']),
                'Sex': 1 if request.form['sex'] == '1' else 0,
                'ChestPainType': request.form['chest_pain_type'],
                'RestingBP': int(request.form['resting_bp']),
                'Cholesterol': int(request.form['cholesterol']),
                'FastingBS': int(request.form['fasting_bs']),
                'RestingECG': request.form['resting_ecg'],
                'MaxHR': int(request.form['max_hr']),
                'ExerciseAngina': 1 if request.form['exercise_angina'] == 'Y' else 0,
                'Oldpeak': float(request.form['oldpeak']),
                'ST_Slope': request.form['st_slope']
            }
            label, risk = predict_heart_disease_rf(user_data)
            show_prediction = True
    return render_template('index.html', risk=risk, label=label, form_data=form_data, show_prediction=show_prediction)

if __name__ == '__main__':
    app.run(debug=True)
