import messages     from "views/modules/messages";
import tasks        from "views/modules/tasks";
import dashline 	from "views/modules/dashline";
import map          from "views/modules/map";
import orders 		from "views/modules/orders";
import revenue 		from "views/modules/revenue";
import visitors     from "views/modules/visitors";


const layout = {
	type: "clean",
	rows:[
		dashline,
		{
			type: "space",
			rows:[
				{
					type: "wide",
					cols: [
						tasks,
						messages
					]
				},
				{
					height: 220,
					type: "wide",
					cols: [
						visitors,
						orders
					]
				},
				{
					type: "wide",
					cols: [
						map,
						revenue

					]
				},
				
			]

		}
	]
};

export default layout;