---
title: 用 Underscore.js 模板渲染页面
imagePath: /assets/images/2016-11-17-using-underscore-template-to-render-page
demoPath: http://www.zhang-ou.com/exercises/underscore-template
---

Underscore.js 有一个 template 函数，用于渲染页面，下面我们将通过一个实例来学习如何使用它。

假设我们要开发一个笔记本电脑的促销页面，最终效果如下图，要显示促销信息和商品信息，并在前端计算出待商品打折后的价格:

![效果图]({{page.imagePath}}/running-result.png)

后台的 JSON 数据是这样的：

``` javascript
var data = {
	promotion: {
		description: '全场八八折',
		time: '11月11日0点至24点'
		discount: 0.88,
	},
	products:[
		{
			brand: 'Apple',
			name: 'MacBook Air 13.3英寸',
			price: 6988
		},
		{
			brand: 'Lenovo',
			name: '拯救者15.6英寸',
			price: 6399
		},
		{
			brand: 'HP',
			name: '暗影精灵15.6英寸',
			price: 5499
		}
	]
};
```

它包括2个属性，promotion 属性是促销信息，有文字描述也有具体的折扣比例，products 属性是产品信息，是一个数组。为了简化，我们把 JSON 数据定义为一个变量，免去 Ajax 请求的过程。

### 渲染对象数据

先显示促销信息。

DOM结构非常简单，只有一个标题和一个待填充的内容区：

``` html
<h1>笔记本电脑</h1>
<div id="content"></div>
```

模板也不复杂，只有一个 p 标签的段落：

``` html
<script type="text/template" id="tmpl">
	<p>促销活动：<%= promotion.description %>，活动时间：<%= promotion.time %></p>
</script>
```

所谓模板，其实就是预留出待填充数据的 HTML 而已，它被封装在一个 script 标签里，注意它的 type 不能写成 text/javascript，因为这不是一段可直接执行的 JavaScript 代码。在模板中以 <%= xxx %> 的形式引用数据，比如上面的促销活动名称就写作 <%= promotion.description %>。

渲染页面的语句如下：

``` javascript
var compiled = _.template(document.getElementById('tmpl').innerHTML);
document.getElementById('content').innerHTML = compiled(data);
```

第1行语句把 script 标签封装的模板内容作为参数传递给 template 函数，得到一个新的函数；第2行语句把 JSON 数据作为参数传递给新函数 compiled，得到渲染后的 HTML，再把 HTML 填充到页面中预留的内容区。

运行效果如下：[（点此查看 live 实例）]({{page.demoPath}}/step-1-object.html)

![渲染对象数据的运行效果]({{page.imagePath}}/step-1-object.png)

在后面的例子中，DOM 结构和渲染页面的语句都不变，所以不再赘述。唯一变化的是模板，所以从这里可以看出，模板是渲染的核心。

### 渲染数组数据

接下来我们来绑定由多个对象组成的数组数据。

为了显示多条数据，模板中加入了一个表格和一个 forEach 循环语句：

``` html
<script type="template" id="tmpl">
	<p>促销活动：<%= promotion.description %>，活动时间：<%= promotion.time %></p>
	<table>
		<tr>
			<td>品牌</td>
			<td>名称</td>
			<td>售价</td>
		</tr>
		<% products.forEach(function(item){ %>
			<tr>
				<td><%= item.brand %></td>
				<td><%= item.name %></td>
				<td><%= item.price %></td>
			</tr>
		<% }) %>
	</table>
</script>
```

当要在模板中执行 JavaScript 代码时，要用 <% xxx %> 的方式把代码包围起来，比如上面的 forEach 循环语句。

运行效果如下：[（点此查看 live 实例）]({{page.demoPath}}/step-2-array.html)

![渲染数组数据的运行效果]({{page.imagePath}}/step-2-array.png)

无论多复杂的 JSON 也无外乎就是对象和数组的嵌套，所以掌握了这2个例子之后，你就可以渲染任意复杂的数据了。

### 在渲染过程中运算

最后再看一下如何在渲染过程中计算，其实非常简单，在引用数据时， <%= xxx %> 中不仅能写直接量，还可以写表达式。

模板的表格中增加了一列，用于计算折后价：

``` html
<script type="template" id="tmpl">
	<p>促销活动：<%= promotion %>，活动时间：<%= promotion_time %></p>
	<table>
		<tr>
			<td>品牌</td>
			<td>名称</td>
			<td>售价</td>
			<td>折后价</td>
		</tr>
		<% products.forEach(function(item){ %>
			<tr>
				<td><%= item.brand %></td>
				<td><%= item.name %></td>
				<td><%= item.price %></td>
				<td><%= Number.parseInt(item.price * promotion.discount) %>
			</tr>
		<% }) %>
	</table>
</script>
```

折后价的表达式是 Number.parseInt(item.price * promotion.discount)。

运行效果如下：[（点此查看 live 实例）]({{page.demoPath}}/step-3-execution.html)

![渲染过程中运算的效果]({{page.imagePath}}/step-3-execution.png)

### 总结

通过运用模板，使数据与表现分离，替代了用 JavaScript 拼接 HTML 字符串的方式，提高了开发效率，更提升了页面的可维护性。

Underscore.js 的 template 函数简单易用，当你习惯了用模板方式来渲染页面以后，在更复杂的应用场景中，你可以选用如 Handlebars 这样专门的模板库来解决更复杂的渲染和数据绑定问题。

### 参考资料

[Underscore.js 官方文档](http://underscorejs.org/#template)