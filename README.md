@lhyunseok/movie-quotes
===============================================
&#39;A

Component Authors, provide some documentation for your users here!


eventHandlers:[{
		event: ['input'],
		effect({dispatch, action:{payload:{event}}}){
			const {value} = event.path[0];
			dispatch('SNC_COLOR_PICKER#VALUE_SET', {value})
		}

	}]




    eventHandlers:[{
		events: ['input'],
		effect(coeffects){
			const {dispatch, action:{payload:{event, host}}} = coeffects;
			 console.log(event);
			 const radio = document.querySelector('input[name="color"]:checked');
			 const selectedValue = radio ? radio.value : null;
			 if (selectedValue) {
				 dispatch('SNC_COLOR_PICKER#VALUE_SET', {value: selectedValue});
			 } else {
				 // 선택된 라디오 버튼이 없을 때의 로직 처리
				 alert(selectedValue)
			 }
		}

	}]